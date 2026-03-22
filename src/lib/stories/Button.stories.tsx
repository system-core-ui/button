import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import type { ButtonVariant, ButtonColor, ButtonSize } from '../models';

// ─── Simple SVG Icons for stories ────────────────────────

const SaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17,21 17,13 7,13 7,21" />
    <polyline points="7,3 7,8 15,8" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22,2 15,22 11,13 2,9" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// ─── Row helper ──────────────────────────────────────────

const Row = ({ children, label }: { children: React.ReactNode; label?: string }) => (
  <div style={{ marginBottom: 24 }}>
    {label && <div style={{ fontSize: 12, fontWeight: 600, color: '#888', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>}
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>{children}</div>
  </div>
);

// ─── Basic ───────────────────────────────────────────────

const BasicStory = () => (
  <div style={{ padding: 32 }}>
    <Button>Click me</Button>
  </div>
);

// ─── Variants ────────────────────────────────────────────

const VariantsStory = () => (
  <div style={{ padding: 32 }}>
    {(['contained', 'outlined', 'text', 'ghost'] as ButtonVariant[]).map((v) => (
      <Row key={v} label={v}>
        <Button variant={v}>Button</Button>
        <Button variant={v} color="secondary">Secondary</Button>
        <Button variant={v} color="error">Error</Button>
      </Row>
    ))}
  </div>
);

// ─── Colors ──────────────────────────────────────────────

const ColorsStory = () => (
  <div style={{ padding: 32 }}>
    <Row label="contained">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as ButtonColor[]).map((c) => (
        <Button key={c} color={c}>{c}</Button>
      ))}
    </Row>
    <Row label="outlined">
      {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as ButtonColor[]).map((c) => (
        <Button key={c} variant="outlined" color={c}>{c}</Button>
      ))}
    </Row>
  </div>
);

// ─── Sizes ───────────────────────────────────────────────

const SizesStory = () => (
  <div style={{ padding: 32 }}>
    <Row label="sizes">
      {(['sm', 'md', 'lg'] as ButtonSize[]).map((s) => (
        <Button key={s} size={s}>Size {s}</Button>
      ))}
    </Row>
    <Row label="outlined sizes">
      {(['sm', 'md', 'lg'] as ButtonSize[]).map((s) => (
        <Button key={s} variant="outlined" size={s}>Size {s}</Button>
      ))}
    </Row>
  </div>
);

// ─── Icons ───────────────────────────────────────────────

const IconsStory = () => (
  <div style={{ padding: 32 }}>
    <Row label="start icon">
      <Button startIcon={<SaveIcon />}>Save</Button>
      <Button variant="outlined" startIcon={<PlusIcon />}>Add Item</Button>
    </Row>
    <Row label="end icon">
      <Button endIcon={<SendIcon />}>Send</Button>
      <Button variant="outlined" color="error" endIcon={<TrashIcon />}>Delete</Button>
    </Row>
    <Row label="both icons">
      <Button startIcon={<SaveIcon />} endIcon={<SendIcon />}>Save & Send</Button>
    </Row>
  </div>
);

// ─── Loading ─────────────────────────────────────────────

const LoadingStory = () => {
  const [loading, setLoading] = useState(false);

  const simulate = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: 32 }}>
      <Row label="loading states">
        <Button loading>Loading...</Button>
        <Button variant="outlined" loading>Loading...</Button>
        <Button variant="text" loading>Loading...</Button>
      </Row>
      <Row label="interactive">
        <Button onClick={simulate} loading={loading}>
          {loading ? 'Saving...' : 'Click to simulate'}
        </Button>
      </Row>
    </div>
  );
};

// ─── Full Width ──────────────────────────────────────────

const FullWidthStory = () => (
  <div style={{ padding: 32, maxWidth: 400 }}>
    <Row>
      <Button fullWidth>Full Width Button</Button>
    </Row>
    <Row>
      <Button variant="outlined" fullWidth>Full Width Outlined</Button>
    </Row>
  </div>
);

// ─── Rounded ─────────────────────────────────────────────

const RoundedStory = () => (
  <div style={{ padding: 32 }}>
    <Row label="rounded (pill shape)">
      <Button rounded>Rounded</Button>
      <Button variant="outlined" rounded>Outlined Pill</Button>
      <Button variant="text" rounded>Text Pill</Button>
      <Button color="error" rounded startIcon={<TrashIcon />}>Delete</Button>
    </Row>
  </div>
);

// ─── Disabled ────────────────────────────────────────────

const DisabledStory = () => (
  <div style={{ padding: 32 }}>
    <Row label="disabled">
      <Button disabled>Contained</Button>
      <Button variant="outlined" disabled>Outlined</Button>
      <Button variant="text" disabled>Text</Button>
      <Button variant="ghost" disabled>Ghost</Button>
    </Row>
  </div>
);

// ─── Playground ──────────────────────────────────────────

const PlaygroundStory = (args: {
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  rounded: boolean;
  fullWidth: boolean;
  loading: boolean;
  disabled: boolean;
  label: string;
}) => (
  <div style={{ padding: 32, maxWidth: args.fullWidth ? 400 : undefined }}>
    <Button
      variant={args.variant}
      color={args.color}
      size={args.size}
      rounded={args.rounded}
      fullWidth={args.fullWidth}
      loading={args.loading}
      disabled={args.disabled}
    >
      {args.label}
    </Button>
  </div>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Button/Button',
};

export default meta;

export const Basic: StoryObj = { name: 'Basic', render: () => <BasicStory /> };
export const Variants: StoryObj = { name: 'Variants', render: () => <VariantsStory /> };
export const Colors: StoryObj = { name: 'Colors', render: () => <ColorsStory /> };
export const Sizes: StoryObj = { name: 'Sizes', render: () => <SizesStory /> };
export const Icons: StoryObj = { name: 'Icons', render: () => <IconsStory /> };
export const Loading: StoryObj = { name: 'Loading', render: () => <LoadingStory /> };
export const FullWidth: StoryObj = { name: 'Full Width', render: () => <FullWidthStory /> };
export const Rounded: StoryObj = { name: 'Rounded', render: () => <RoundedStory /> };
export const Disabled: StoryObj = { name: 'Disabled', render: () => <DisabledStory /> };

export const Playground: StoryObj = {
  name: 'Playground',
  argTypes: {
    variant: { control: { type: 'select' }, options: ['contained', 'outlined', 'text', 'ghost'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    rounded: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'md',
    rounded: false,
    fullWidth: false,
    loading: false,
    disabled: false,
    label: 'Button',
  },
  render: (args: any) => <PlaygroundStory {...args} />,
};
