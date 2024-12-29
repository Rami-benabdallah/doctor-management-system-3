import { fn } from '@storybook/test';

import { DocButton } from './DocButton';
import TeemoArrow from '@/app/assets/icons/TeemoArrow';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'doc/DocButton',
  component: DocButton,
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
export const SimpleDark = {
  args: {
    mode: 'dark',
    label: 'SHOP NOW',
  },
};

export const SimpleLight = {
    args: {
      mode: 'light',
      label: 'SHOP NOW',
    },
};

export const SimpleWithIcon = {
    args: {
      mode: 'light',
      label: 'SHOP NOW',
      icon: TeemoArrow,
      hasRightIcon: true,
    },
  };

export const disabled = {
    args: {
      mode: 'light',
      label: 'SHOP NOW',
      disabled: true,
    },
};
