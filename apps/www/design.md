---
version: alpha
name: Browser.icu
description: >
  Dark chat-based browser assistant. A person types a task in plain language,
  watches an agent work in a real browser, and receives a summary plus saved files.

colors:
  primary: "#F0500F"
  primary-subtle: "#F0500F1A"
  secondary: "#8E92A3"
  tertiary: "#747474"
  neutral: "#41444A"
  surface: "#222327"
  surface-container: "#28292E"
  input-overlay: "#0000001F"
  on-surface: "#BCBDC3"
  on-surface-variant: "#C5C8CE"
  scrim: "#141417"

typography:
  headline-display:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.2

  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.02em

  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6

  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45

  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4

  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4

  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.02em

  brand-logo:
    fontFamily: Syne
    fontSize: 19px
    fontWeight: 700
    lineHeight: 1.1

  mono-time:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.2

radius:
  none: 0px
  chip: 3px
  full: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    radius: "{radius.none}"
    paddingVertical: 12px
    paddingHorizontal: 12px
    typography: "{typography.label-md}"

  button-secondary:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.primary}"
    radius: "{radius.none}"
    paddingVertical: 12px
    paddingHorizontal: 12px
    typography: "{typography.label-md}"

  button-disabled:
    backgroundColor: "{colors.primary-subtle}"
    textColor: "{colors.tertiary}"
    radius: "{radius.none}"
    paddingVertical: 12px
    paddingHorizontal: 12px
    typography: "{typography.label-md}"

  chip:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.neutral}"
    radius: "{radius.chip}"
    paddingVertical: 8px
    paddingHorizontal: 8px
    typography: "{typography.label-md}"

  input:
    backgroundColor: "{colors.input-overlay}"
    textColor: "{colors.on-surface}"
    borderBottomColor: "{colors.neutral}"
    borderBottomWidth: 1px
    radius: "{radius.none}"
    paddingVertical: 12px
    paddingHorizontal: 12px
    typography: "{typography.body-md}"

  card-auth:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.neutral}"
    borderWidth: 1px
    radius: "{radius.none}"
    padding: 22px

  composer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.neutral}"
    borderWidth: 1px
    radius: "{radius.none}"
    padding: 16px
    typography: "{typography.body-md}"
---

# Browser.icu

Control the web's most powerful autonomous browser agents.

## Overview

Browser.icu is a dark, calm, chat-based browser assistant. A person types a task in plain language, watches an agent work in a real browser, and receives a summary plus saved files.

The mood is quiet and confident. Roomy content areas, clear gaps between sections, sharp structural edges, and one bright orange accent help operators hand over web work while remaining in control.

Orange is reserved for primary actions, links, and active interactive states. It should not be used as general decoration.

## Colors

The palette is rooted in deep dark neutrals with a single warm orange interaction color.

- **Primary (#F0500F):** Primary actions, important links, active controls, and selected-state accents.
- **Primary Subtle (#F0500F1A):** Low-strength orange fill for secondary and disabled actions.
- **Secondary (#8E92A3):** Helper text, faded labels, inactive controls, and quiet icons.
- **Tertiary (#747474):** Disabled or nonessential text, including resend countdowns and timestamps.
- **Neutral (#41444A):** Outlines, dividers, and structural borders.
- **Surface (#222327):** Main page background.
- **Surface Container (#28292E):** Sidebar, cards, panels, and elevated containers.
- **Input Overlay (#0000001F):** Low-strength dark overlay used in text fields.
- **On Surface (#BCBDC3):** Primary light text.
- **On Surface Variant (#C5C8CE):** Alternate light text for selected headings and body content.
- **Scrim (#141417):** Near-black overlay and welcome-banner background.

The eight-digit hexadecimal colors use `RRGGBBAA` ordering.

Embedded browser screenshots, profile images, and finished brand artwork are exempt from the application palette because their source content may contain additional colors.

Tertiary text should only carry nonessential information. It does not provide sufficient contrast for important small text. Neutral borders should not be the only indication of an interactive state.

## Typography

- **Display headlines:** Inter Regular at 36px for authentication titles.
- **Medium headlines:** Inter Regular at 30px for the empty-chat greeting.
- **Body:** Inter Regular at 16px for messages, descriptions, and primary content.
- **Small body:** Inter Regular at 14px for timeline steps and secondary content.
- **Large labels:** Inter SemiBold at 16px for field labels and selected small headings.
- **Buttons and chips:** Inter Medium at 14px.
- **Small labels:** Inter Regular at 12px for assistant labels, disclaimers, and metadata.
- **Logo:** Syne Bold at approximately 19px when represented as text. Prefer the approved logo asset in production.
- **Timeline times:** JetBrains Mono Regular at 14px, visually de-emphasized.

The approved logo artwork takes precedence over reconstructing the logo from editable text.

## Layout

The main application uses a three-column desktop shell.

- **Left:** Narrow, full-height sidebar on the surface-container color with a divider on its right edge.
- **Center:** Main chat with a comfortable maximum line length.
- **Right:** Contextual side panel shown only during or after a task.
- **Top bar:** “Browser” on the left and three compact controls on the right.

The center column is wider when the side panel is closed and becomes narrower when the panel opens.

The timeline panel is wide enough to show a browser preview and work history. The files panel is narrower when it only shows downloadable files. Opening a file expands the panel into a readable document preview.

Side columns may collapse at narrower widths. Exact responsive breakpoints and minimum panel widths remain to be defined.

## Elevation and Depth

Depth comes primarily from tonal layers and borders rather than heavy shadows.

The page uses the darkest surface. Cards, the sidebar, and panels use a slightly lighter layer with thin outlines.

Shadows are reserved for content floating above the application, including:

- Welcome overlay
- Prompt Queue notice
- Search overlay
- Popups and confirmations

## Shapes

The application uses a predominantly square visual system.

- Buttons, cards, inputs, composer boxes, panels, tabs, notices, dialogs, and message containers use square corners.
- Profile images are fully circular.
- Compact chips, status labels, and keyboard-hint chips may use a minimal 3px radius.
- Do not introduce medium or large corner radii into structural UI.
- Inputs use a bottom outline rather than a fully rounded field.
- Card outlines are slightly more prominent than panel dividers.

Browser screenshots and imported artwork may contain their own shapes and are not governed by these rules.

## Components

### Authentication strip

A thin strip across the top of the authentication card with a divider below it. It contains three small dots, a shield icon, and faded “BROWSER DAO” text.

### Authentication card

A narrow, square-cornered card centered on the dark page. It contains a large title followed by content with clear vertical spacing.

### Buttons

- The primary action uses solid orange with dark text.
- Secondary actions use a subtle orange fill with orange text.
- Disabled resend actions use the same subtle fill with tertiary text.
- Authentication actions may stretch to full width.
- Paired navigation and resend actions use equal widths.
- Buttons remain square.

### Inputs

Inputs use a dark fill and bottom outline.

A standard input contains:

- Label above
- Optional leading icon
- Hint or entered text
- Helper text below

Verification-code inputs center their hint and value.

### Composer

The composer is a bordered, square-cornered box at the bottom of the chat.

The first row contains:

- Plus control
- Prompt text
- Contextual controls such as microphone, send, pause, or stop

The second row contains:

- Credits icon
- Current balance, such as “900 $BROWSER”

A centered warning appears below the composer in active and finished chats. The warning is hidden only on the empty new-chat screen.

### Messages

The person's message appears on the right inside a bordered square box.

Assistant messages appear on the left without a surrounding box. Each assistant response begins with a small “Browser” label.

A typical task sequence contains:

1. Person request
2. Assistant acknowledgement
3. Work preview
4. Finished response
5. Summary and files

### Work preview

A work-preview block contains:

- Small status icon
- Short action headline
- Expand control
- Browser-preview image below

Loading uses a spinner or loading preview. Completion uses a captured page screenshot.

### Panel tabs

Panel tabs use compact text controls.

- The active tab uses a light fill with dark text.
- Inactive tabs remain visually quiet.
- File tabs can include a close control.
- A plus control may open additional content.

The visual states exist, but several interactions still require product definition.

### Panel link row

Contains a link icon, underlined web address, and an expand or copy control.

### Timeline list

A vertical list of work steps. Each step contains:

- Monospace time
- Status icon
- One sentence describing the operation

Completed steps are dim. The current step is brighter and appears last while work is active.

### Files list

Rows resembling a code-editor file list. Each row contains:

- File icon
- Markdown filename
- Download control

Selecting a file can open it in a document-preview tab.

### File preview

A readable Markdown preview shown in the right panel. It includes:

- File tab
- Last-modified metadata
- File actions
- Document title
- Rendered report content

### Prompt Queue notice

A floating card shown while the agent is busy.

It contains:

- Title and close control
- Explanation that prompts can continue to be submitted
- Full-width “Learn more” action

### Welcome popup

A dimmed full-screen overlay with a centered popup.

It contains:

- Dark brand banner
- Approved orange illustration
- Browser.icu logo
- Main “Continue” button
- Terms note

The illustration and logo must be reused as finished assets rather than redrawn.

### Search Replays overlay

A centered search overlay over a dimmed chat screen.

It contains:

- Search and Ask AI tabs
- Search field
- Matching task-session results
- Selected result state
- Keyboard navigation hints
- Escape hint

Its visual design is established. Search behavior and keyboard interactions still need implementation details.

## Do's and Don'ts

- Do reserve orange for primary actions, links, and active interactive states.
- Don't use orange as general decoration or for passive body text.
- Do keep primary text in soft light grey and helper text in muted grey.
- Don't use tertiary text for essential information.
- Do keep structural components square.
- Don't introduce medium or large corner radii into cards, buttons, panels, or dialogs.
- Do reserve rounding for profile images and compact chips.
- Do reuse approved banner artwork, logo artwork, and icons.
- Don't redraw brand artwork or icons from scratch.
- Do hide the composer warning only on the empty new-chat screen.
- Don't show the side panel outside an active or finished task.
- Do treat browser screenshots and profile imagery as external content.
- Do use the exact example copy when testing designed states.

## Designed Screens

### Sign-in

- Title: “Sign-in”
- Email label
- Email hint
- Characters-left helper text
- Login-method instruction
- Full-width “Send magic link” primary button

A separate “Send Code” action is not present in the current final design.

### Magic Link Sent

- Title: “Verify Your Email”
- Subtitle explaining that the magic link was sent
- Body explaining that selecting the link signs the person in
- Web3 login fallback
- Equal-width “Back to Login” and disabled resend actions
- Resend countdown shown in seconds

### New Empty Chat

- Centered “What are we doing today?” greeting
- Composer without the warning line
- Three suggestion actions
- Refresh control

### Active Working Chat

- Person request on the right
- Assistant acknowledgement on the left
- Loading work preview
- Composer with the warning line

The prompt shown inside the composer is placeholder content and does not need to match the active example task.

### Welcome Overlay

- Dimmed application background
- Centered welcome popup
- Finished banner artwork
- Logo
- “Continue” action
- Terms note

### Work in Progress with Timeline

- Narrower center chat
- Wide timeline panel
- Page address
- Large browser screenshot
- Work-step history
- Current operation last
- Prompt Queue notice floating over the center chat

### Finished Task with Timeline

- Finished assistant response
- “Summary” section
- Recommendation
- Completed timeline panel
- Composer and warning

### Finished Task with Files

- Finished assistant response
- Narrow files panel
- Two downloadable Markdown files
- Active files tab

### Finished Task with File Preview

- Finished assistant response
- Expanded right panel
- Files and document tabs
- Rendered Markdown report
- File metadata and actions

### Search Replays

- Dimmed chat screen
- Search overlay
- Search and Ask AI tabs
- Search field
- Matching saved sessions
- Keyboard navigation hints

## Copy

Use these exact words when testing copy. Typographic apostrophes are intentional.

**Person's example request**

“Navigate to hubspot.com/pricing and break down the tiers. Compare features across tiers, which plan offers the best value for a 5-person team? Save results in a markdown file.”

**Assistant acknowledgement**

“I’ll review HubSpot’s current pricing tiers and feature differences, assess the best fit for a 5-person team, and save the findings as a Markdown file.”

**Preview headline**

“Inspect the current HubSpot pricing page”

**Files toggle**

“Show files”

**Finished message opening**

“Completed the HubSpot pricing comparison and five-person team value assessment.”

The following Summary recommends the Starter tier over Professional and Enterprise for a five-person team. It notes the free-plan user cap and the lowest paid entry point.

**Sidebar examples**

- “Which HubSpot Pricing Tier Offers ...”
- “Collect Character Names from OAD...”
- User: “Cosmic Egg”
- Logo: “Browser.icu”

**Prompt Queue body**

“Taking too long? Keep sending your prompts while you wait, the Agent will take care of them after each operation is complete”

**Composer warning**

“Browser is an AI and can make mistakes. Always double check responses before use.”

**Verification fallback**

“Try Web3 log-in”

## User Journey

The intended journey begins on the public landing page and continues into chat.

A first-time visitor sees the welcome popup and continues. They type and send a prompt. If authentication is required, they enter an email, request a magic link, verify their email, and return to the task.

The agent session runs live. If the agent needs input, it asks a question and the person answers. When the task finishes, the result appears, generated files become available, and the session is saved for replay.

From there, the person can:

- Start a new task
- Search previous task sessions
- Reopen a saved session
- View the timeline
- Download generated files
- Preview a generated Markdown file

Side paths include guest prompting before sign-in and Web3 login as an alternative to email.

If the agent does not require clarification, the session moves directly from working to finished.

## Design Gaps

The following screens or behaviors are not yet fully designed:

1. Public landing page
2. Web3 login
3. Code-based email verification
4. Agent-question and person-answer state
5. Guest-prompt authentication return path
6. Search interaction behavior
7. Start-new-task behavior
8. Plus and close controls in panel tabs
9. Placeholder header controls
10. Composer control rules for idle, working, paused, stopped, and disabled states
11. Responsive breakpoints and collapsed navigation
12. Error, offline, empty-file, and failed-task states

## Asset Requirements

- Reuse the welcome-banner illustration as a finished image.
- Reuse the approved Browser.icu logo asset.
- Replace the real profile photograph with an approved placeholder.
- Refresh icon exports before implementation because hosted copies may expire.
- Maintain a stable icon set for plus, settings, microphone, send, stop, file, download, close, expand, search, share, and panel controls.
- Do not redraw icons or brand artwork from scratch.

## Accessibility Notes

- Orange on the primary dark surface is approximately 4.38:1 and narrowly misses WCAG AA for normal-size text.
- Avoid using small orange text for essential information until the color or treatment is adjusted.
- Tertiary text does not meet normal-text contrast requirements on the primary surfaces.
- Disabled text may use tertiary because it is noninteractive, but essential countdown information should have an additional accessible treatment.
- Neutral borders are intentionally subtle and should not be the only indicator of focus, selection, or validation.
- Focus-visible styles and keyboard navigation states still need definition.

## Efficacy Checks

### Colors

- Application chrome uses the documented palette.
- Orange is limited to primary actions, links, and active states.
- Embedded screenshots, avatar images, and finished artwork are excluded from palette checks.
- Essential text meets accessibility contrast requirements.

### Text

- Inter, Syne, and JetBrains Mono are used in their documented roles.
- Button and chip labels use the 14px medium label style.
- Field labels use the 16px label style where emphasis is required.
- Exact testing copy preserves wording and punctuation.

### Authentication

- Sign-in and Magic Link Sent match the final layouts and copy.
- The resend countdown is visibly disabled.
- Code verification remains logged as a missing screen.

### Chat states

- Empty chat hides the warning.
- Working and finished chats show the warning.
- Person and assistant messages use their correct alignment and container treatments.
- Loading and completed previews are visually distinct.

### Side panel

- Timeline mode shows the current step last while working.
- Files mode shows two Markdown files.
- Opening a file produces a readable document-preview state.
- Active tab styling updates correctly.

### Overlays

- Welcome popup includes banner art, logo, main action, and terms note.
- Prompt Queue appears over a working chat.
- Search Replays appears over a dimmed application state.

### Journey

- Every designed journey step has a matching screen.
- Missing steps remain explicitly listed under Design Gaps.
- Search Replays and file-preview states are included in the documented journey.

### Copy

- Example request, acknowledgement, summary opening, helper strings, Prompt Queue copy, and composer warning appear word for word.
- Placeholder composer text is not evaluated against the active example task.
