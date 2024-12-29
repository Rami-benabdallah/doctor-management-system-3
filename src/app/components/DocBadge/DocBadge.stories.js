import { fn } from '@storybook/test';

import { DocBadge } from './DocBadge';
import DailyClose from '@/app/assets/icons/DocClose';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'doc/DocBadge',
  component: DocBadge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    label: 'hello',
    border: 'border border-light',
    bg: 'bg-red-500 text-light',
    badgeColor: 'text-light',
    padding: 'px-4 py-1',
    rounded: 'rounded-2xl',
    icon: DailyClose,
    onClick: () => console.log('rrr'),
  },
};
