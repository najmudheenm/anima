import { CheckboxLabel } from ".";

export default {
  title: "Components/CheckboxLabel",
  component: CheckboxLabel,
  argTypes: {
    checkboxLabel: {
      options: [
        "disabled-unchecked",
        "base-unchecked",
        "base-checked",
        "focused-checked",
        "disabled-checked",
        "focused-unchecked",
        "loading",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    checkboxLabel: "disabled-unchecked",
    className: {},
    divClassName: {},
    text: "Label",
  },
};
