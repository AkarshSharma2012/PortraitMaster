# PortraitMaster

A portable agent skill for natural portrait retouching with genuine editable layers, verified PSD/JPEG exports, and factual reflections. Works with the editor and tools exposed by the host; Photoshop and Photopea are supported workflow choices, not bundled integrations.

## Tell your agent to set it up

> Set up PortraitMaster from https://github.com/AkarshSharma2012/PortraitMaster. Read INSTALL.md, inspect the installer, preserve my existing configuration, and show me how to use the skill.

Or install from a local checkout:

```sh
git clone https://github.com/AkarshSharma2012/PortraitMaster.git
cd PortraitMaster
node scripts/install.mjs --host codex
```

Use `--host claude`, `--host agents`, or `--target <skill-directory>` for another supported location. See [installation](INSTALL.md) for updates, ZIP packaging, and manual setup.

## Use it

```text
Use PortraitMaster to edit this portrait for a casual mood. Follow the attached rubric, keep each edit type on a separate layer, and deliver a layered PSD, sRGB JPEG, and one-page reflection.
```

Codex hosts supporting skill invocation can use `$portraitmaster`. Native slash-command registration depends on the host. PortraitMaster does not require Autopilot, Jcode, a paid API, or any particular browser plugin. It can work alongside Autopilot when both are available.

The workflow covers source inspection, crop and global corrections, separate cleanup, natural skin tone work, optional frequency separation, dodge and burn, subtle eye enhancements, masked sharpening, saved-file checks, and rubric evidence. It distinguishes editable layers from persistent Photoshop undo history.

It cannot create a real camera RAW original from a JPEG, repair missing in-camera evidence, guarantee a grade, or connect an editor merely by installing instructions. Uploads and submission require the user's authorization and verified access.

No portraits, student records, credentials, telemetry, model services, or editor binaries are included. [MIT license](LICENSE).

## Verify the package

Node 22+; no npm dependencies:

```sh
node --test
node scripts/package.mjs
```

The ZIP contains `portraitmaster/SKILL.md` and its references. See [the skill](skills/portraitmaster/SKILL.md) for the complete workflow.
