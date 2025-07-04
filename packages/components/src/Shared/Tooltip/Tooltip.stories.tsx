import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider, Tooltip, Row, ThemeControlsModal } from "@components";
import type { TooltipProps } from "@components";
import { HassConnect } from "@hass-connect-fake";

function Template(props: TooltipProps) {
  return (
    <HassConnect hassUrl="http://homeassistant.local:8123">
      <ThemeProvider />
      <ThemeControlsModal />
      <Row fullHeight fullWidth>
        <Tooltip {...props}>
          <div
            style={{
              backgroundColor: "var(--ha-S400)",
              color: "var(--ha-S400-contrast)",
              padding: "2rem",
              borderRadius: "0.5rem",
            }}
          >
            Tooltip
          </div>
        </Tooltip>
      </Row>
    </HassConnect>
  );
}

export default {
  title: "components/Shared/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    centered: true,
    fullWidth: true,
    fillHeight: true,
  },
  argTypes: {},
} satisfies Meta<typeof Tooltip>;
export type TimeStory = StoryObj<typeof Tooltip>;
export const Docs: TimeStory = {
  render: Template,
  args: {
    title: "A tooltip!!!",
  },
};
