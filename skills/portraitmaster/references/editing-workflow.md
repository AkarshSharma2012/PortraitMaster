# Portrait editing: source to export

Apply the requested assignment requirements first. The sequence prevents local retouching from compensating for a global problem that will change later.

## 1. Cull and prepare

- Examine eyes at 100%, then expression and pose. Select among available frames; if only one exists, report a single-image assessment rather than inventing a cull.
- Keep originals untouched in a separate location. Record the chosen source, intended filenames, final size, and editor in a private project checkpoint.
- Respect EXIF orientation before positioning masks or cropping. Check whether automatic lens corrections were already applied.

## 2. Global processing

- Refine crop and straighten. Keep comfortable headroom and gaze space; avoid cuts at joints. Preserve recoverable cropped pixels where supported.
- For a genuine RAW file, use Camera Raw or an available RAW processor and open as an embedded Smart Object. Enable appropriate lens corrections and chromatic-aberration removal when supported and needed. Do not invent a lens profile or claim RAW processing on JPEG input.
- Use a neutral reference or gray card when available. Otherwise judge white balance visually against natural skin; state that no measured neutral reference was available when relevant.
- Set exposure for the face. Protect skin highlights, gently open eye sockets and chin shadows, and establish whites and blacks without clipping important detail. A clipped JPEG highlight may not contain recoverable information.
- Keep texture and clarity modest. Balance red and orange skin tones and reduce distracting background colors when useful.
- Use refined subject, face, and background masks for separation. Apply noise reduction only when the image needs it; do not erase texture to complete a checklist.

## 3. Nondestructive cleanup

- Preserve and lock the original Smart Object. Use a separate editable working source or Smart Filter layer as needed.
- Put background distractions, flyaways, lint, and temporary skin blemishes on distinct named cleanup layers when they are separate edit types. Use Sample All Layers when available and inspect the sampling result.
- Retain permanent moles, scars, and defining features unless the subject or user specifically requests otherwise.
- Blend repairs into adjacent texture and light. Check mask edges, repeated patterns, seams, and subject boundaries at 100%. An ungraded patch must receive the same later global treatment as its surroundings.

## 4. Skin tone and optional frequency separation

Even distracting blotchiness with low-opacity masked tonal adjustments, retaining pores and natural variation. Do not smooth all skin by default. Frequency separation is optional; when chosen, build it above the preserved source and cleanup and keep color and texture work editable. Compare at 100% and fit-to-screen; reduce excessive smoothing.

## 5. Dodge, burn, and eyes

Use separate lightening and darkening Curves or Exposure layers with masks, or an editable neutral-gray Soft Light layer. With a brush, use low flow around 2-5% and build gradually; use other masking methods only when their transitions and results can be inspected.

Separate local skin balancing, eye-socket lift, contouring, and eye enhancement when they require independent control. Follow existing light; preserve facial structure. Brighten irises and catchlights slightly, with restrained lash/brow definition. Reduce distracting yellow or red in teeth or sclera only when visible and needed; never make them pure white.

## 6. Color and style

Use editable color adjustments for the desired mood while retaining believable skin. Add a gentle vignette or background burn when it improves emphasis. Check consistency across a set if multiple portraits are supplied.

## 7. Finish

Apply Smart Sharpen or a High Pass layer with a mask targeting eyes, lashes, brows, and hair. Avoid broad skin sharpening and bright edge halos. Optional grain must serve the requested style rather than hide failed retouching.

## Suggested stack, top to bottom

1. Masked output sharpening, or an editable Smart Filter in the appropriate source position.
2. Color styling and optional vignette/background burn.
3. Separate dodge, burn, skin tone, and eye adjustment layers.
4. Optional frequency-separation layers.
5. Separate cleanup layers for background and temporary skin distractions.
6. Editable working Smart Object, when needed.
7. Locked original embedded Smart Object.

Adapt the order to blend modes and sampling dependencies. Verify that every named operation actually has content, correct visibility, and the intended area of effect.

## 8-9. Quality check, save, and export

Follow [quality checks](quality-and-rubric.md). Save a layered PSD with embedded sources. Reopen it before exporting a high-quality JPEG with embedded sRGB. Do not repeatedly recompress the JPEG. For print, preserve a high-resolution master and use the printer's actual profile and output sharpening requirements when supplied.
