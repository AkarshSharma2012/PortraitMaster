import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, mkdirSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { install } from '../scripts/install.mjs';

const fixture = () => mkdtempSync(join(tmpdir(), 'portraitmaster-test-'));
test('dry run does not create directories', () => {
  const target = join(fixture(), 'new skills');
  assert.equal(install({ target, dryRun: true }).dryRun, true);
  assert.equal(existsSync(target), false);
});
test('installation copies the full skill into a path with spaces', () => {
  const target = join(fixture(), 'my skills');
  const result = install({ target });
  for (const name of ['SKILL.md', 'agents/openai.yaml', 'references/editing-workflow.md', 'references/quality-and-rubric.md', 'references/reflection.md']) {
    assert.deepEqual(readFileSync(join(result.destination, name)), readFileSync(new URL(`../skills/portraitmaster/${name}`, import.meta.url)));
  }
});
test('existing installation is preserved without explicit replacement', () => {
  const target = fixture();
  install({ target });
  const marker = join(target, 'portraitmaster', 'custom.txt');
  writeFileSync(marker, 'preserve me');
  assert.throws(() => install({ target }), /already exists/);
  assert.equal(readFileSync(marker, 'utf8'), 'preserve me');
});
test('replacement backs up customized contents outside discovery', () => {
  const base = fixture(), target = join(base, 'skills'), home = join(base, 'home');
  install({ target });
  writeFileSync(join(target, 'portraitmaster', 'custom.txt'), 'old version');
  const result = install({ target, home, replace: true });
  assert.equal(readFileSync(join(result.backup, 'custom.txt'), 'utf8'), 'old version');
  assert.equal(existsSync(join(result.destination, 'custom.txt')), false);
  assert.ok(result.backup.startsWith(join(home, '.portraitmaster', 'backups')));
});
test('source and destination overlap is refused', () => {
  assert.throws(() => install({ target: fileURLToPath(new URL('../skills', import.meta.url)) }), /overlap/);
});
test('symlink destination is refused', t => {
  const base = fixture(), real = join(base, 'real'), target = join(base, 'skills');
  mkdirSync(real); mkdirSync(target);
  try { symlinkSync(real, join(target, 'portraitmaster'), process.platform === 'win32' ? 'junction' : 'dir'); }
  catch (error) { if (error.code === 'EPERM') { t.skip('Symlink permission unavailable'); return; } throw error; }
  assert.throws(() => install({ target, replace: true }), /Symlink/);
});
