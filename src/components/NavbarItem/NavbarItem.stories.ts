import type { Meta, StoryObj } from "@storybook/react";
import NavbarItem from "./NavbarItem";

const meta: Meta<typeof NavbarItem> = {
  title: "NavbarItem",
  component: NavbarItem,
};

export default meta;
type Story = StoryObj<typeof NavbarItem>;

// const Template = (args) => <NavbarItem {...args} />;
