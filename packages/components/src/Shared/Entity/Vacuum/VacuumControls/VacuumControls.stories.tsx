import type { Meta, StoryObj, Args } from "@storybook/react-vite";
import { ThemeProvider, VacuumControls, Row } from "@components";
import { HassConnect } from "@hass-connect-fake";

function Render(args?: Args) {
  return (
    <HassConnect hassUrl="http://localhost:8123">
      <ThemeProvider />
      <Row gap="1rem" fullHeight fullWidth>
        <VacuumControls {...args} entity="vacuum.robot_vacuum" />
      </Row>
    </HassConnect>
  );
}

export default {
  title: "components/Shared/Entity/Vacuum/VacuumControls",
  component: VacuumControls,
  tags: ["autodocs"],
  parameters: {
    centered: true,
  },
} satisfies Meta<typeof VacuumControls>;
export type VacuumStory = StoryObj<typeof VacuumControls>;
export const Docs: VacuumStory = {
  render: Render,
  args: {
    entity: "vacuum.robot_vacuum",
  },
};
