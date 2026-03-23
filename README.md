# @thanh-libs/button

Themed **Button** and **IconButton** components for React, built with Emotion.

## Installation

```bash
npm install @thanh-libs/button
```

### Peer dependencies

```bash
npm install react react-dom @emotion/react @emotion/styled @thanh-libs/theme
```

## Components

### Button

Full-featured button with variants, colors, sizes, icons, and loading state.

```tsx
import { Button } from '@thanh-libs/button';

<Button variant="contained" color="primary" size="md">
  Click me
</Button>

<Button variant="outlined" color="error" startIcon={<TrashIcon />} loading>
  Deleting...
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'contained' \| 'outlined' \| 'dashed' \| 'text' \| 'ghost'` | `'contained'` | Visual style |
| `color` | `'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success'` | `'primary'` | Theme color |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `startIcon` | `ReactNode` | — | Icon before the label |
| `endIcon` | `ReactNode` | — | Icon after the label |
| `loading` | `boolean` | `false` | Show spinner and disable interaction |
| `fullWidth` | `boolean` | `false` | Stretch to full width of parent |
| `rounded` | `boolean` | `false` | Pill shape (fully rounded corners) |

Also accepts all native `<button>` HTML attributes.

---

### IconButton

Icon-only button, square or circle shape.

```tsx
import { IconButton } from '@thanh-libs/button';

<IconButton color="error">
  <TrashIcon />
</IconButton>

<IconButton variant="outlined" size="sm" rounded={false}>
  <SettingsIcon />
</IconButton>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'contained' \| 'outlined' \| 'dashed' \| 'text' \| 'ghost'` | `'ghost'` | Visual style |
| `color` | `'primary' \| 'secondary' \| 'error' \| 'warning' \| 'info' \| 'success'` | `'primary'` | Theme color |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `rounded` | `boolean` | `true` | Circle shape |
| `loading` | `boolean` | `false` | Show spinner |
| `children` | `ReactNode` | **(required)** | Icon element |

Also accepts all native `<button>` HTML attributes.

## Theming

Wrap your app with `ThemeProvider` from `@thanh-libs/theme`:

```tsx
import { ThemeProvider } from '@thanh-libs/theme';
import { Button } from '@thanh-libs/button';

<ThemeProvider>
  <Button>Themed Button</Button>
</ThemeProvider>
```

## Accessibility (WCAG 2.2)

Both components comply with [WCAG 2.2](https://www.w3.org/TR/WCAG22/) out of the box:

| Feature | Standard | Details |
|---------|----------|---------|
| Semantic `<button>` | SC 4.1.2 | Native role, keyboard support |
| `aria-busy` | SC 4.1.2 | Set automatically during `loading` |
| `aria-disabled` | SC 4.1.2 | Set when `disabled` or `loading` |
| `role="status"` on spinner | SC 4.1.3 | Screen readers announce loading |
| `aria-hidden` on icons | SC 1.1.1 | Decorative icons hidden from AT |
| `:focus-visible` ring | SC 2.4.7 | Keyboard-only focus indicator |
| High Contrast outline | SC 2.4.13 | Transparent outline for forced-colors mode |
| `forwardRef` | SC 4.1.2 | Ref forwarding for programmatic focus |

### IconButton — accessible name required

Icon-only buttons have no visible text label. You **must** provide `aria-label`:

```tsx
// ✅ Correct
<IconButton aria-label="Delete" color="error">
  <TrashIcon />
</IconButton>

// ❌ Wrong — screen readers will announce nothing useful
<IconButton color="error">
  <TrashIcon />
</IconButton>
```

## License

MIT
