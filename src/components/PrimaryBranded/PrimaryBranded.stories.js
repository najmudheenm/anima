import { PrimaryBranded } from ".";

export default {
  title: "Components/PrimaryBranded",
  component: PrimaryBranded,
  argTypes: {
    property1: {
      options: [
        "branded-loading",
        "branded-disabled",
        "branded-short-hover",
        "branded-short-base",
        "branded-hover",
        "branded-short-loading",
        "branded-short-disabled",
        "branded-short-selected",
        "branded-base",
        "branded-selected",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "branded-loading",
    className: {},
    text: "CTA",
  },
};
