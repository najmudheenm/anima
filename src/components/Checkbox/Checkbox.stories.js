import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checkbox: {
      options: [
        "disabled-unchecked",
        "base-unchecked",
        "base-checked",
        "focused-checked",
        "disabled-checked",
        "focused-unchecked",
        "loading",
        "hover",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    checkbox: "disabled-unchecked",
    className: {},
  },
};
