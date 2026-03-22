import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from '../IconButton';
import type { ButtonVariant, ButtonColor, ButtonSize } from '../models';

// ─── Simple SVG Icons ────────────────────────────────────

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
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
    <Row label="icon buttons">
      <IconButton><HeartIcon /></IconButton>
      <IconButton><PlusIcon /></IconButton>
      <IconButton><TrashIcon /></IconButton>
      <IconButton><EditIcon /></IconButton>
      <IconButton><CloseIcon /></IconButton>
    </Row>
    <Row label="contained">
      <IconButton variant="contained"><HeartIcon /></IconButton>
      <IconButton variant="contained" color="error"><TrashIcon /></IconButton>
      <IconButton variant="contained" color="success"><PlusIcon /></IconButton>
    </Row>
    <Row label="outlined">
      <IconButton variant="outlined"><EditIcon /></IconButton>
      <IconButton variant="outlined" color="error"><CloseIcon /></IconButton>
    </Row>
  </div>
);

// ─── Variants & Colors ──────────────────────────────────

const VariantsColorsStory = () => (
  <div style={{ padding: 32 }}>
    {(['contained', 'outlined', 'dashed', 'text', 'ghost'] as ButtonVariant[]).map((v) => (
      <Row key={v} label={v}>
        {(['primary', 'secondary', 'error', 'warning', 'info', 'success'] as ButtonColor[]).map((c) => (
          <IconButton key={c} variant={v} color={c}>
            <HeartIcon />
          </IconButton>
        ))}
      </Row>
    ))}
  </div>
);

// ─── Playground ──────────────────────────────────────────

const PlaygroundStory = (args: {
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  rounded: boolean;
  loading: boolean;
  disabled: boolean;
}) => (
  <div style={{ padding: 32 }}>
    <IconButton
      variant={args.variant}
      color={args.color}
      size={args.size}
      rounded={args.rounded}
      loading={args.loading}
      disabled={args.disabled}
    >
      <HeartIcon />
    </IconButton>
  </div>
);

// ─── Meta & Exports ──────────────────────────────────────

const meta: Meta = {
  title: 'Button/IconButton',
};

export default meta;

export const Basic: StoryObj = { name: 'Basic', render: () => <BasicStory /> };
export const VariantsColors: StoryObj = { name: 'Variants & Colors', render: () => <VariantsColorsStory /> };

export const Playground: StoryObj = {
  name: 'Playground',
  argTypes: {
    variant: { control: { type: 'select' }, options: ['contained', 'outlined', 'dashed', 'text', 'ghost'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    rounded: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'ghost',
    color: 'primary',
    size: 'md',
    rounded: true,
    loading: false,
    disabled: false,
  },
  render: (args: any) => <PlaygroundStory {...args} />,
};
