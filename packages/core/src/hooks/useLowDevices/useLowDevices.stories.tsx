import { Story, Source, Title, Description, ArgTypes } from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeProvider, Row, Column, ThemeControlsModal } from "@components";
import { HassConnect } from "@hass-connect-fake";
import basicExample from "./examples/basic.code?raw";
import { RenderDevices } from "./examples/basic.code";

function Template() {
  return (
    <HassConnect hassUrl="http://homeassistant.local:8123">
      <ThemeProvider />
      <ThemeControlsModal />
      <Column fullWidth gap="1rem">
        <p>The following renders the low battery devices in an EntitiesCard component</p>
        <Row gap="1rem" fullWidth>
          <RenderDevices />
        </Row>
      </Column>
    </HassConnect>
  );
}

export default {
  title: "core/hooks/useLowDevices",
  component: Template,
  tags: ["autodocs"],
  parameters: {
    centered: true,
    height: "auto",
    docs: {
      page: () => (
        <>
          <Title />
          <h5>
            <mark>{`useLowDevices({ min = 0, max = 20, blacklist = [], whitelist = [] })`}</mark>
          </h5>
          <Description />
          <p>The following is the use of the hook in it&apos;s default form:</p>
          <Source dark code={`const lowDevices = useLowDevices();`} />
          <ArgTypes />
          <Template />
          <p>Here&apos;s the source code for the above EntitiesCard:</p>
          <Source dark code={basicExample} />
        </>
      ),
      description: {
        component: `A hook that will generate a list of devices that are below a certain battery percentage. This is useful for generating a list of devices that need to be charged.`,
      },
    },
  },
  argTypes: {
    min: {
      control: "number",
      description: "The minimum battery percentage to retrieve",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: "number",
      description: "The maximum battery percentage to retrieve",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "20" },
      },
    },
    blacklist: {
      table: {
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
      control: "object",
      description: `If there's entities returning in the results, that you want to exclude, you can provide a partial entity_id match to exclude it`,
    },
    whitelist: {
      table: {
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
      control: "object",
      description: `If there's entities returning in the results, but you only want certain entities, provide a partial entity_id match to include them`,
    },
  },
} satisfies Meta;

export type Story = StoryObj;
export const Docs: Story = {
  args: {},
};
