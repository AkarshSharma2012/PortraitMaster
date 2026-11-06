#!/usr/bin/env node
import { cpSync, existsSync, lstatSync, mkdirSync, readdirSync, renameSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../skills/portraitmaster', import.meta.url));

function rejectSymlinks(path) {
  for (let part = resolve(path); ; part = dirname(part)) {
    try {
      if (lstatSync(part).isSymbolicLink()) throw new Error(`Symlink path refused: ${part}`);
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (dirname(part) === part) break;
  }
}

function checkTree(path) {
  rejectSymlinks(path);
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const child = join(path, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Symlink source refused: ${child}`);
    if (entry.isDirectory()) checkTree(child);
    else if (!entry.isFile()) throw new Error(`Non-file source refused: ${child}`);
  }
}

function contains(parent, child) {
  const rel = relative(parent, child);
  return !rel || (rel !== '..' && !rel.startsWith(`..${process.platform === 'win32' ? '\\' : '/'}`) && !isAbsolute(rel));
}

export function install({ target, replace = false, dryRun = false, home = homedir() }) {
  const root = resolve(target);
  const destination = join(root, 'portraitmaster');
  if (contains(source, destination) || contains(destination, source)) throw new Error('Source and destination overlap');
  checkTree(source);
  rejectSymlinks(destination);
  const existing = existsSync(destination);
  if (existing && !lstatSync(destination).isDirectory()) throw new Error('Destination is not a directory');
  if (existing && !replace) throw new Error('Skill already exists; review the update and use --replace');
  if (dryRun) return { destination, dryRun: true, replacesExisting: existing };

  const stamp = `${Date.now()}-${process.pid}`;
  const staging = join(root, `.portraitmaster-install-${stamp}`);
  if (existsSync(staging)) throw new Error('Staging path already exists');
  mkdirSync(root, { recursive: true });
  cpSync(source, staging, { recursive: true, errorOnExist: true, force: false });
  let backup;
  if (existing) {
    const backupRoot = join(resolve(home), '.portraitmaster', 'backups');
    rejectSymlinks(backupRoot);
    backup = join(backupRoot, `portraitmaster-${stamp}`);
    mkdirSync(backupRoot, { recursive: true });
    renameSync(destination, backup);
  }
  try { renameSync(staging, destination); }
  catch (error) {
    if (backup && !existsSync(destination)) renameSync(backup, destination);
    throw error;
  }
  return { destination, backup: backup ?? null, installed: true };
}

function main() {
  const args = process.argv.slice(2);
  const options = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--help') {
      console.log('Usage: node scripts/install.mjs (--host codex|claude|agents | --target <skills-directory>) [--dry-run] [--replace]');
      return;
    }
    if (arg === '--replace' || arg === '--dry-run') options[arg.slice(2)] = true;
    else if (arg === '--host' || arg === '--target') {
      const value = args[++i];
      if (!value || value.startsWith('--') || options[arg.slice(2)]) throw new Error(`Invalid ${arg}`);
      options[arg.slice(2)] = value;
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  if (Boolean(options.host) === Boolean(options.target)) throw new Error('Choose exactly one of --host or --target');
  const roots = {
    codex: join(process.env.CODEX_HOME || join(homedir(), '.codex'), 'skills'),
    claude: join(homedir(), '.claude', 'skills'),
    agents: join(homedir(), '.agents', 'skills'),
  };
  if (options.host && !Object.hasOwn(roots, options.host)) throw new Error('Unknown host');
  console.log(JSON.stringify(install({ target: options.target || roots[options.host], replace: options.replace, dryRun: options['dry-run'] }), null, 2));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
