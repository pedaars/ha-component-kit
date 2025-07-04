import { Source } from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj, Args } from "@storybook/react-vite";
import { ThemeProvider, Group, Column, ButtonCard, ThemeControlsModal } from "@components";
import type { ButtonCardProps } from "@components";
import { HassConnect } from "@hass-connect-fake";
import jsxToString from "react-element-to-jsx-string";

function Template(args?: Partial<ButtonCardProps<"switch.fake_switch">>) {
  return (
    <HassConnect hassUrl="http://localhost:8123">
      <ThemeProvider />
      <ThemeControlsModal />
      <Group title="Examples" alignItems="stretch">
        <ButtonCard
          {...args}
          entity="switch.fake_switch"
          onClick={(entity) => {
            entity.service.toggle();
          }}
        />
        <ButtonCard service="toggle" entity="light.fake_light_1" />
        <ButtonCard service="toggle" entity="media_player.fake_tv" />
        <ButtonCard service="toggle" entity="light.unavailable" />
      </Group>
    </HassConnect>
  );
}

function TemplateOnclick(args?: Partial<ButtonCardProps<"climate.air_conditioner">>) {
  return (
    <HassConnect hassUrl="http://localhost:8123">
      <ThemeProvider />
      <ThemeControlsModal />
      <ButtonCard
        {...args}
        entity="climate.air_conditioner"
        onClick={(entity) => {
          entity.service.setHvacMode({
            serviceData: {
              hvac_mode: entity.state === "off" ? "heat" : "off",
            },
          });
          entity.service.setTemperature({
            serviceData: {
              temperature: 25,
            },
          });
        }}
      />
    </HassConnect>
  );
}

function ExampleDocs() {
  return (
    <div>
      <h2>ButtonCard</h2>
      <p>
        This component is designed to make it very easy to use and control a device, the code below is all you need to control your device.
      </p>
      <p>
        This will automatically extract the friendly name, icon, last updated, state, light color and group of the entity to render the
        ButtonCard below, if there&apos;s no icon linked in home assistant it will use a predefined default by domain.
      </p>
      <h3>Custom onClick</h3>
      <p>
        If you don&apos;t want to call a specific service or want to do multiple things with the entity, you can omit the service prop and
        perform your logic manually
      </p>
      <TemplateOnclick />
      <h3>Source Code</h3>
      <Source
        dark
        code={`
      <HassConnect hassUrl="http://localhost:8123">
        <ThemeProvider />
        <ThemeControlsModal />
        <ButtonCard
          entity="climate.air_conditioner"
          onClick={entity => {
            entity.service.setHvacMode({
              serviceData: {
                hvac_mode: entity.state === 'off' ? 'heat' : 'off',
              }
            });
            entity.service.setTemperature({
              serviceData: {
                temperature: 25,
              }
            });
          }}
        />
      </HassConnect>
    `}
      />
      <Template />
      <h3>Source Code</h3>
      <p>This example shows how you can use the Group component to create a group of cards.</p>
      <Source dark code={jsxToString(Template())} />
    </div>
  );
}

function Render(args?: Args) {
  return (
    <HassConnect hassUrl="http://localhost:8123">
      <ThemeProvider />
      <ThemeControlsModal />
      <Column gap="1rem" fullWidth>
        <ButtonCard {...args} />
        <ButtonCard {...args} entity="light.fake_light_1" service="toggle" layoutType="slim" />
        <ButtonCard {...args} entity="cover.cover_position_only" service="toggle" layoutType="slim-vertical" />
        <ButtonCard service="toggle" entity="light.fake_light_1" />
      </Column>
    </HassConnect>
  );
}

export default {
  title: "components/Cards/ButtonCard",
  component: ButtonCard,
  tags: ["autodocs"],
  parameters: {
    fullWidth: true,
  },
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof ButtonCard>;

export type ExamplesStory = StoryObj<typeof ButtonCard<"switch.fake_switch">>;
export const Docs: ExamplesStory = {
  render: Render,
  args: {
    service: "toggle",
    entity: "switch.fake_switch",
  },
};

export type GroupStory = StoryObj<typeof ExampleDocs>;
export const DetailedExample: GroupStory = {
  render: ExampleDocs,
};
