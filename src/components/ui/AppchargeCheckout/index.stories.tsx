import { Meta, Story } from "@storybook/react";
import AppchargeCheckout, { AppchargeCheckoutProps } from "./";

export default {
  title: "Components/User Interface/Button",
  component: AppchargeCheckout,
} as Meta;

const Template: Story<AppchargeCheckoutProps> = (args) => (
  <AppchargeCheckout
    url=''
    playerId=''
    price={1}
    sessionMetaData={{
      name: "John Doe",
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
