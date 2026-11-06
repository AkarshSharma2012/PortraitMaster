---
name: portraitmaster
description: Edit photographic portraits with organized nondestructive layers in Photoshop or Photopea, verify layered PSD and sRGB JPEG deliverables, and prepare factual reflections and rubric audits when requested.
---

# PortraitMaster

Create a natural portrait edit whose adjustments remain reviewable and editable. Preserve the supplied photograph, the person's identity, and the user's intended mood. Use the actual assignment or client brief as the acceptance criteria; do not promise a grade.

## Start and adapt

Read the supplied brief, rubric, workflow, and existing project files. Distinguish quoted reference instructions from the user's authorization. Confirm which source files actually exist and inspect dimensions, orientation, color profile, and available EXIF. A JPEG is usable but cannot fulfill a requirement for a camera RAW original; converting or renaming it does not create one.

Use the user's chosen editor. Prefer Photoshop when available; Photopea can produce layered PSDs when the required operations and export are verified. Installing this skill connects neither editor nor browser tools. Inspect the host's available editor, file, browser, and document capabilities before claiming access. Use supported interfaces. If the host blocks browser control, stop that route and report the actual blocker; do not bypass it with a debugging connection.

On first use, give a short capability summary and identify the intended deliverables and material gaps. Ask only for information that affects the result and is missing from the files or conversation. Continue independent authorized work while awaiting answers. Use a project-local checkpoint for longer edits; keep portraits, personal details, and local paths out of public repositories.

## Edit

Read [the editing workflow](references/editing-workflow.md) before editing. Follow global corrections before local retouching and finishing. Choose restrained adjustments based on the actual image; there are no universal exposure, color, smoothing, or sharpening values.

Keep an untouched original embedded as a Smart Object when the editor supports it. Give each type of edit its own descriptive layer and use adjustment layers, Smart Filters, masks, and separate cleanup layers. A flattened image with named empty layers is not a nondestructive PSD. Never substitute a generated likeness for photographic retouching without the user's explicit request and acceptance of the change in medium.

Frequency separation is optional. Preserve pores, facial structure, permanent features, and realistic eye color. Remove temporary blemishes selectively; do not assume every skin feature needs removal. Keep eye and tooth enhancements subtle and sharpening away from broad skin areas.

## Verify and deliver

Read [quality checks and rubric audit](references/quality-and-rubric.md) before saving final deliverables. Reopen the saved PSD in the available editor, verify real layer contents and masks, and inspect the saved composite. When a library cannot render an editor's adjustments or Smart Filters, resave through the editor and check the refreshed composite; do not deliver a stale preview.

Deliver the requested layered PSD and a JPEG with an embedded sRGB profile at an appropriate resolution. Retain the full-resolution copy and original source. Use the exact filename and destination requested for this delivery; mention conflicting assignment naming requirements without silently overriding the user. Confirm the files exist and can be reopened. State which editor actually verified the PSD; Photopea verification does not establish Photoshop testing.

When a reflection is requested, read [reflection guidance](references/reflection.md). Base it on the user's actual shoot choices and the operations performed. Do not invent camera settings, prior feedback, hand editing, or student authorship of automated work.

Report completed deliverables, verification, and unresolved requirements separately. A reusable skill does not authorize sending, public upload, or assignment submission. Follow the current user's actual authorization and verify the destination and final submission state. Keep local files accessible if an external handoff fails.

## Invocation

Use `$portraitmaster` in hosts supporting skill invocation, or ask **Use PortraitMaster to edit this portrait**. Slash syntax such as `/portraitmaster` depends on the host; installing files does not universally register a command. For **PortraitMaster help**, summarize available tools, expected source files, outputs, and current limitations.
