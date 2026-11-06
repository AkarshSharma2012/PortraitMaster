# Install PortraitMaster

Inspect the repository before running scripts. Use a normal user shell. Node 22+ is needed only for the installer, packaging, and tests. The instruction workflow itself has no Node dependency.

```sh
git clone https://github.com/AkarshSharma2012/PortraitMaster.git
cd PortraitMaster
node scripts/install.mjs --host codex
```

Choose one discovery location for a given host:

| Option | Destination |
| --- | --- |
| `--host codex` | `$CODEX_HOME/skills/portraitmaster`, or `~/.codex/skills/portraitmaster` |
| `--host claude` | `~/.claude/skills/portraitmaster` |
| `--host agents` | `~/.agents/skills/portraitmaster` |
| `--target <directory>` | `<directory>/portraitmaster` using that host's documented skills directory |

Preview with `--dry-run`. Existing installs are refused by default. After reviewing an update, use `--replace`; the previous directory is moved to a timestamped backup under `~/.portraitmaster/backups`, outside discovery. Source or destination symlinks and overlapping paths are refused. The installer copies only this skill and does not alter global instructions, connect accounts, install editor software, or add services.

Without Node, copy the entire `skills/portraitmaster` folder into the host's documented skill directory. Avoid duplicate copies in multiple discovery paths for the same host. Restart or refresh the host and verify the skill appears; file installation alone does not establish discovery in an already running session.

For a host accepting uploaded skill ZIPs, download `portraitmaster.zip` from [Releases](https://github.com/AkarshSharma2012/PortraitMaster/releases), or build it with `node scripts/package.mjs`. Its root is `portraitmaster/SKILL.md` with all supporting files. Enable it through the host's supported skill interface. If no skill interface exists, explicitly read SKILL.md and linked references for a session-only workflow.

## First use

Ask **Use PortraitMaster to edit this portrait**, attach or identify the source, and include the rubric if applicable. The agent should inspect source formats and actual tool access, explain missing capabilities, and confirm the expected output files. For a reflection, provide your real mood, posing direction, location/light decisions, and feedback applied. `$portraitmaster` works in hosts supporting that invocation; `/portraitmaster` is not universally registered.

Updates: review and pull the repository, then rerun the installer with `--replace`. To uninstall, remove only the installed `portraitmaster` directory through your normal file tools. Original images and delivered edits are separate and remain untouched. Restore a backup manually if needed.
