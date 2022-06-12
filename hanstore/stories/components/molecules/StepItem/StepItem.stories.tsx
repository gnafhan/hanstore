import { Meta } from "@storybook/react";
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem';

export default {
    title: 'Components/Molecules/StepItem',
    component: StepItem,
  } as Meta;
  
  const Template = (args: StepItemProps) => <StepItem {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    icon: 'step-1',
    title: 'Super Mechs',
    desc1: "Pilih salah satu game",
    desc2: 'Pilih salah satu game'
  };
  