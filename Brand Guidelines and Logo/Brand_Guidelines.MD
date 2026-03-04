# Brand Guidelines

A comprehensive reference for color, typography, visual language, and web implementation standards.

---

## 1. Color Palette

### Primary Colors

| Role | Name | HEX | Usage |
|------|------|-----|-------|
| 🟢 Primary | Green | `#22C55E` | Main brand color, CTAs, highlights |
| 🟩 Accent | Emerald | `#10B981` | Secondary actions, hover states |
| 💚 Glow | Mint | `#6EE7B7` | Highlights, gradients, glow effects |
| 🌑 Background | Deep Navy | `#020617` | Main background, dark mode base |

### Supporting Colors

| Role | Name | HEX | Usage |
|------|------|-----|-------|
| 🃏 Card | Forest Dark | `#0B1F17` | Content cards, containers |
| 🔲 Border | Slate | `#1F2937` | Dividers, outlines, strokes |
| ⬜ Text Primary | Off-White | `#E5E7EB` | Headings, primary text |
| 🩶 Text Secondary | Cool Gray | `#9CA3AF` | Body text, captions, meta |

---

### Color Usage Rules

- **Backgrounds** always use `#020617` as the base. Cards layer on top with `#0B1F17`.
- **CTAs and key actions** use `#22C55E` (Primary). Never use both Primary and Accent on the same element simultaneously.
- **Hover states** transition from `#22C55E` → `#10B981`.
- **Glow/gradient effects** blend `#10B981` → `#6EE7B7` for radial or linear highlights.
- **Borders** use `#1F2937` at full opacity, or `#E5E7EB` at ~10% opacity for subtle separators.
- **Never use pure white (`#FFFFFF`)** — always use `#E5E7EB` for primary text.
- **Never use pure black** as a background — use `#020617`.

### CSS Variables

```css
:root {
  /* Brand Colors */
  --color-primary:    #22C55E;
  --color-accent:     #10B981;
  --color-glow:       #6EE7B7;

  /* Backgrounds */
  --color-bg:         #020617;
  --color-card:       #0B1F17;
  --color-border:     #1F2937;

  /* Text */
  --color-text:       #E5E7EB;
  --color-text-muted: #9CA3AF;
}
```

---

## 2. Typography System

### Typefaces

| Role | Font Stack | Use Case |
|------|-----------|---------|
| **Primary** | `Inter`, `Helvetica Neue`, `sans-serif` | All headings (H1–H3) |
| **Secondary** | `Inter`, `system-ui`, `sans-serif` | Body copy, captions, UI labels |

> Both typefaces share the Inter family for visual cohesion. The heading style is differentiated through weight and size, not typeface switching.

---

### Type Scale

| Level | Weight | Size | Color | Use |
|-------|--------|------|-------|-----|
| **H1** | Bold — 700 | 48px / 3rem | `#E5E7EB` | Page titles, hero headlines |
| **H2** | Semibold — 600 | 36px / 2.25rem | `#E5E7EB` | Section headers |
| **H3** | Semibold — 600 | 24px / 1.5rem | `#E5E7EB` | Subsection titles, card headers |
| **Body** | Regular — 400 | 16px / 1rem | `#E5E7EB` | Paragraphs, content |
| **Caption** | Regular — 400 | 14px / 0.875rem | `#9CA3AF` | Small text, labels, metadata |

### Line Height & Spacing

```css
h1 { font-size: 3rem;      font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: 2.25rem;   font-weight: 600; line-height: 1.2; letter-spacing: -0.01em; }
h3 { font-size: 1.5rem;    font-weight: 600; line-height: 1.3; }
p  { font-size: 1rem;      font-weight: 400; line-height: 1.7; color: #E5E7EB; }
.caption { font-size: 0.875rem; font-weight: 400; line-height: 1.5; color: #9CA3AF; }
```

---

## 3. Visual Language

### Brand Aesthetic
**Flowing · Abstract · Professional**

The visual identity communicates cutting-edge technology through organic, fluid motion. It avoids rigid, blocky layouts in favor of curves, layered transparency, and luminous green gradients on a deep dark background.

### Graphic Elements

| Element | Description |
|---------|-------------|
| **Curved Forms** | Ribbon-like 3D shapes with smooth bezier curves. Used in hero backgrounds, section dividers, and feature illustrations. |
| **Flowing Lines** | Fine, parallel wave lines that suggest data streams, connectivity, or motion. Typically rendered in low-opacity greens over dark backgrounds. |
| **Gradient Overlays** | Radial and linear gradients blending `#10B981` → `#6EE7B7` → transparent. Used to add glow, depth, and luminosity. |

### Iconography Style
**Minimal · Clean · Geometric**

- Use **outline/stroke icons** — never filled/solid.
- Stroke weight: **1.5–2px**.
- Color: `#22C55E` or `#10B981` on dark backgrounds.
- Shape language: **rounded corners**, geometric precision.
- Recommended libraries: [Lucide Icons](https://lucide.dev), [Phosphor Icons](https://phosphoricons.com)

### Photography Style
**Professional · Clean · Technology-Focused**

- Images should feel **purposeful and precise** — not stock-photography generic.
- Preferred subjects: circuit boards, data visualizations, abstract tech, clean workspaces.
- Color treatment: apply a **green tint overlay** at 15–25% opacity to unify photography with the brand palette.
- Avoid: lifestyle photography, people-centric shots, warm color temperature images.

---

## 4. Component Patterns

### Buttons

```css
/* Primary CTA */
.btn-primary {
  background: #22C55E;
  color: #020617;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  border: none;
  transition: background 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  background: #10B981;
  box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
}

/* Secondary / Ghost */
.btn-secondary {
  background: transparent;
  color: #22C55E;
  border: 1px solid #22C55E;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s ease;
}
.btn-secondary:hover {
  background: rgba(34, 197, 94, 0.1);
}
```

### Cards

```css
.card {
  background: #0B1F17;
  border: 1px solid #1F2937;
  border-radius: 16px;
  padding: 1.5rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  border-color: #22C55E;
  box-shadow: 0 0 24px rgba(34, 197, 94, 0.15);
}
```

### Glow Effects

```css
/* Green glow — use sparingly on key elements */
.glow {
  box-shadow: 0 0 40px rgba(110, 231, 183, 0.2),
              0 0 80px rgba(16, 185, 129, 0.1);
}

/* Text glow — for hero headlines */
.text-glow {
  text-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
}
```

---

## 5. Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Icon gaps, tight inline spacing |
| `--space-sm` | 8px | Component internal padding |
| `--space-md` | 16px | Default padding, grid gaps |
| `--space-lg` | 32px | Section internal padding |
| `--space-xl` | 64px | Section vertical spacing |
| `--space-2xl` | 128px | Hero/page section margins |

- **Max content width:** `1280px`
- **Default gutter:** `24px` on mobile, `48px` on desktop
- **Grid:** 12-column with `24px` column gaps
- **Border radius:** `8px` (small), `12px` (medium), `16px` (large), `999px` (pill)

---

## 6. Motion & Animation

All animations should feel **fluid and purposeful** — aligned with the flowing brand aesthetic.

| Property | Value |
|----------|-------|
| Default easing | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Micro-interaction duration | `150ms – 250ms` |
| Page transitions | `400ms – 600ms` |
| Glow pulse | `2000ms`, ease-in-out, infinite |

```css
/* Subtle glow pulse for key UI elements */
@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.2); }
  50%       { box-shadow: 0 0 40px rgba(34, 197, 94, 0.5); }
}

/* Fade-up entrance */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## 7. Do's and Don'ts

### ✅ Do
- Use dark backgrounds (`#020617`) as the default canvas
- Layer cards (`#0B1F17`) with subtle green borders on hover
- Apply glows and gradients to **hero elements only** — not every component
- Use `#22C55E` for a single dominant CTA per section
- Keep iconography minimal and outline-style
- Pair flowing abstract visuals with clean, precise typography

### ❌ Don't
- Use bright white backgrounds — this is a dark-mode-first brand
- Use purple, blue, or warm tones — green is the sole brand hue
- Apply glow effects to every element — it loses impact
- Mix typeface families outside of the Inter system
- Use filled/solid icons
- Use gradients in text unless it's a key hero headline

---

*These guidelines ensure visual consistency across all digital touchpoints including web, product UI, presentations, and marketing materials.*