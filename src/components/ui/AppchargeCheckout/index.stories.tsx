import { Meta, Story } from "@storybook/react";
import AppchargeCheckout, { AppchargeCheckoutProps } from "./";

export default {
  title: "Components/User Interface/Button",
  component: AppchargeCheckout,
} as Meta;

const Template: Story<AppchargeCheckoutProps> = (args) => (
  <AppchargeCheckout
    sessionMetaData={{
      name: "John Doe",
    }}
    {...args}
    url='https://localhost:3000'
    playerId='1'
    price={1}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
