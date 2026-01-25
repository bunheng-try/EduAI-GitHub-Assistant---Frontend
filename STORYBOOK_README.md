# 📘 Storybook Development Guide

This documentation provides the standards and workflow for adding components to our Storybook library.

## 🚀 Getting Started

### 1. Run Storybook
To start the Storybook development server, run the following command in your terminal:

```bash
npm run storybook
# OR
pnpm storybook

## 📂 Project Structure

It is important to understand where files are located to import them correctly in your stories.

| Resource | Path | Description |
| :--- | :--- | :--- |
| **UI Components** | `src/shared/components/ui/` | The source code for Shadcn/UI components (e.g., `button.tsx`). |
| **Story Files** | `src/stories/` | The location for all `.stories.tsx` documentation files. |
| **Global Styles** | `src/index.css` | Tailwind and global CSS variables required for styling. |

---

## 📝 How to Create a New Story

Follow these steps when you add a new component (e.g., `Card`, `Input`, `Badge`) to the project.

### Step 1: Create the Story File
Navigate to the `src/stories/` folder and create a new file named `[ComponentName].stories.tsx`.

* *Example:* `src/stories/Badge.stories.tsx`

### Step 2: Add the Story Code
Copy the template below. **Note the specific import path for our shared components.**

```tsx
import type { Meta, StoryObj } from '@storybook/react';

// ⚠️ IMPORTANT: Our components are located in the 'shared' folder
// Adjust this import to match the component you are documenting
import { Badge } from "@/shared/components/ui/badge";

// 1. Component Metadata
const meta = {
  title: 'UI/Badge', // Defines the sidebar category
  component: Badge,
  tags: ['autodocs'], // Generates the automatic docs page
  parameters: {
    layout: 'centered', // Centers the component on the screen
  },
  // Optional: Define controls for props
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// 2. Define Your Stories (Variations)

// The default version of the component
export const Default: Story = {
  args: {
    children: 'Default Badge',
    variant: 'default',
  },
};

// A variation (e.g., Destructive)
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

// A variation with custom Tailwind classes
export const CustomStyle: Story = {
  args: {
    children: 'Custom Badge',
    className: 'bg-blue-500 hover:bg-blue-600',
  },
};