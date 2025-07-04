import { Story } from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { HassConnect } from '@hass-connect-fake';
import {
  ThemeProvider,
  SidebarCard,
  FabCard,
  Row,
  Column,
  AreaCard,
  ButtonCard,
  WeatherCard,
  TimeCard,
  Group,
  ClimateCard,
  MediaPlayerCard,
  EntitiesCard,
  TriggerCard,
  GarbageCollectionCard,
  useBreakpoint,
  SensorCard,
  CameraCard,
  ButtonBar,
  ButtonBarButton,
  EntitiesCardRow,
  ButtonGroup,
  FamilyCard,
  PersonCard,
  ButtonGroupButton,
  VacuumCard,
  AlarmCard,
  ThemeControlsModal,
} from '@components';
import office from './office.jpg';
import livingRoom from './living-room.jpg';
import diningRoom from './dining-room.jpg';


function Template() {
  const device = useBreakpoint();
  return <Row fullWidth wrap="nowrap" fullHeight alignItems="stretch">
    <SidebarCard startOpen={false} weatherCardProps={{
      entity: 'weather.entity',
    }} />
    <Column fullWidth gap="1rem" wrap="nowrap" justifyContent="flex-start" style={{
      padding: device.xxs || device.xs ? '1rem' : '2rem',
      overflowY: 'auto',
    }}>
      <Group title="Time & Date" layout="row" justifyContent="flex-start" alignItems="stretch" description="Displays some variations for the TimeCard">
        <TimeCard />
        <TimeCard hideDate hideIcon center />
        <TimeCard timeFormat="hh:mm:ss a" dateFormat={"MMM DD"} />
      </Group>
      <Row fullWidth  justifyContent="flex-start" alignItems="stretch" gap="1rem">
        <Group
          md={6}
          lg={6}
          xlg={6}
          title="Button Card"
          description="This is how the ButtonCards appear in the default layout"
          justifyContent="flex-start"
          alignItems="stretch">
          <ButtonCard id="default" entity="light.fake_light_1" service="toggle" md={6} lg={4} xlg={3} />
          <ButtonCard id="default" entity="cover.cover_with_tilt" service="toggle" md={6} lg={4} xlg={3} />
          <ButtonCard id="default" entity="light.fake_light_3" service="toggle"  md={6} lg={4} xlg={3}/>
          <ButtonCard id="default" entity="switch.fake_switch" service="toggle"  md={6} lg={4} xlg={3}/>
          <ButtonCard id="default" entity="vacuum.robot_vacuum" service="start"  md={6} lg={4} xlg={3} />
        </Group>
        <Group
          md={6}
          lg={6}
          xlg={6}
          title="ButtonCard"
          description={<span>With layoutType=&quot;slim&quot; we can change the layout of the ButtonCard</span>}
          justifyContent="flex-start"
          alignItems="stretch">
          <ButtonCard id="slim" layoutType="slim" entity="light.fake_light_1" service="toggle" md={6} lg={4} xlg={4} />
          <ButtonCard id="slim" layoutType="slim" entity="weather.entity" md={6} lg={4} xlg={4} />
          <ButtonCard id="slim" layoutType="slim" entity="climate.air_conditioner" md={6} lg={4} xlg={4} />
          <ButtonCard id="slim" layoutType="slim" entity="switch.fake_switch" service="toggle" md={6} lg={4} xlg={4} />
          <ButtonCard id="slim" layoutType="slim" entity="cover.cover_with_tilt" service="toggle" md={6} lg={4} xlg={4} />
        </Group>
      </Row>
      <Group title="ButtonCard"  description={<span>With layoutType=&quot;slim-vertical&quot; we can change the layout of the ButtonCard</span>} justifyContent="flex-start" alignItems="stretch">
        <ButtonCard id="slim-vertical" layoutType="slim-vertical" entity="light.fake_light_1" service="toggle" />
        <ButtonCard id="slim-vertical" layoutType="slim-vertical" entity="light.fake_light_2" service="toggle" icon="mdi:power" />
        <ButtonCard id="slim-vertical" layoutType="slim-vertical" entity="light.fake_light_3" service="toggle" />
        <ButtonCard id="slim-vertical" layoutType="slim-vertical" entity="switch.fake_switch" service="toggle" />
        <ButtonCard id="slim-vertical" layoutType="slim-vertical" entity="vacuum.robot_vacuum" service="start" />
      </Group>
      <Group title="FabCard & ButtonBar & ButtonGroup" justifyContent="flex-start" alignItems="stretch" description="FabCard is a great way to show simple entities you just want to perform a simple action and don't care about the name / data, there's a bunch of different ways to render and control entities" gap="1rem">
        <FabCard entity="light.fake_light_1" service="toggle" />
        <FabCard entity="light.fake_light_2" service="toggle" icon="mdi:power" />
        <FabCard entity="light.fake_light_3" service="toggle" />
        <FabCard entity="switch.fake_switch" service="toggle" />
        <FabCard entity="vacuum.robot_vacuum" service="start" />
        <FabCard entity="vacuum.robot_vacuum" service="start">
          <span>Custom Content</span>
        </FabCard>
        <Row gap="1rem">
          <ButtonBar>
            <ButtonBarButton entity="switch.record" />
            <ButtonBarButton entity="binary_sensor.vehicle" />
            <ButtonBarButton entity="sensor.air_conditioner_inside_temperature" />
          </ButtonBar>
          <ButtonBar layoutType="bubble">
            <ButtonBarButton entity="switch.record" />
            <ButtonBarButton entity="binary_sensor.vehicle" />
            <ButtonBarButton entity="sensor.air_conditioner_inside_temperature" />
          </ButtonBar>
        </Row>
        <ButtonGroup orientation="horizontal" thickness={40}>
          <ButtonGroupButton
            entity="light.fake_light_1"
            service="toggle"
            serviceData={{
              brightness_pct: 50
            }}
          />
          <ButtonGroupButton entity="binary_sensor.vehicle" />
          <ButtonGroupButton
            entity="switch.record"
            service="toggle"
          />
        </ButtonGroup>
      </Group>
      <Group title="Miscellaneous" description="items will stretch to fit the same height per row" layout="column" gap="1rem">
        <Row gap="1rem" justifyContent="flex-start" alignItems="stretch" fullWidth>
          <EntitiesCard includeLastUpdated>
            <EntitiesCardRow entity="sensor.time" />
            <EntitiesCardRow entity="sensor.date" />
            <EntitiesCardRow entity="switch.fake_switch" icon="mdi:gamepad-classic" name="Gaming Computer" />
          </EntitiesCard>
          <MediaPlayerCard entity="media_player.fake_speaker_2" layout="slim" />
          <TriggerCard entity="scene.good_morning" />
          <ClimateCard layoutType="slim-vertical" entity="climate.air_conditioner" />
          <WeatherCard entity="weather.entity" />
          <GarbageCollectionCard description="Here's the upcoming garbage collection schedule." schedules={[
            {
              day: "Thursday",
              frequency: "weekly",
              weeks: [
                [
                  {
                    color: "#b62525",
                    name: "General Waste",
                  },
                  {
                    color: "#009b00",
                    name: "Garden Waste",
                  },
                ],
                [
                  {
                    color: "#b62525",
                    textColor: "white",
                    name: "Waste",
                  },
                  {
                    color: "#c8c804",
                    name: "Recycling",
                  },
                ],
                [
                  {
                    color: "#b62525",
                    icon: "game-icons:nuclear-waste",
                  },
                  {
                    color: "#009b00",
                    name: "Garden",
                  },
                ],
                ["#b62525", "#c8c804"],
              ],
            },
          ]} />       
          <CameraCard
            entity="camera.demo_camera"
            name="Only poster available in demo"
            headerSensors={[
            <ButtonBarButton key="a" entity="binary_sensor.vehicle" />,
            <ButtonBarButton key="b" entity="switch.record" />
          ]}
          />
          <SensorCard entity="sensor.air_conditioner_inside_temperature" />     
          <AreaCard icon="mdi:office-chair" title="Office" hash="office" image={office}>
            <Column fullWidth gap="1rem" style={{
              padding: '1rem',
            }}>
              <Group title="Lights & Switches">
                <ButtonCard entity="light.fake_light_1" service="toggle" />
                <ButtonCard entity="light.fake_light_2" service="toggle" />
                <ButtonCard entity="light.fake_light_3" service="toggle" />
                <ButtonCard entity="switch.fake_switch" service="toggle" />
                <ButtonCard entity="vacuum.robot_vacuum" service="start" />
              </Group>
              <Group title="Random Stuff">
                <EntitiesCard includeLastUpdated>
                  <EntitiesCardRow entity="sensor.time" />
                  <EntitiesCardRow entity="sensor.date" />
                  <EntitiesCardRow entity="switch.fake_switch" icon="mdi:gamepad-classic" name="Gaming Computer" onClick={ (entity) => {
                    alert(`You clicked on ${entity.attributes.friendly_name}!`);
                  }} renderState={(entity) => {
                    return entity.state === "on" ? <span>On!</span> : <span>Off!</span>;
                  }} />
                </EntitiesCard>
                <MediaPlayerCard entity="media_player.fake_speaker" />
                <TriggerCard entity="scene.good_morning" />
              </Group>
              <Group title="Lights & Switches Fabs">
                <FabCard entity="light.fake_light_1" service="toggle" />
                <FabCard entity="light.fake_light_2" service="toggle" icon="mdi:power" />
                <FabCard entity="light.fake_light_3" service="toggle" />
                <FabCard entity="switch.fake_switch" service="toggle" />
                <FabCard entity="vacuum.robot_vacuum" service="start" />
              </Group>
            </Column>
          </AreaCard>
          <AreaCard icon="mdi:sofa" title="Living Room" hash="living-room" image={livingRoom}>
            <Column fullWidth gap="1rem" style={{
              padding: '1rem',
            }}>
              <Row gap="1rem" fullWidth>
                <ButtonCard entity="light.fake_light_1" service="toggle" />
                <ButtonCard entity="switch.fake_switch" service="toggle" />
                <ButtonCard entity="media_player.fake_speaker" service="toggle" />
              </Row>
              <Row gap="1rem" fullWidth>
                <FabCard entity="switch.fake_switch" service="toggle" />
                <FabCard entity="vacuum.robot_vacuum" service="start" />
              </Row>
              <Group title="Living Entities">
                <ButtonCard entity="light.fake_light_2" service="toggle" />
                <ButtonCard entity="light.fake_light_3" service="toggle" />
                <ButtonCard entity="vacuum.robot_vacuum" service="start" />
              </Group>
            </Column>
          </AreaCard>
          <AreaCard icon="mdi:dining" title="Dining Room" hash="dining-room" image={diningRoom}>
            <Column fullWidth gap="1rem" style={{
              padding: '1rem',
            }}>
              <Group title="Dining Entities">
                <ButtonCard entity="light.fake_light_1" service="toggle" />
                <ButtonCard entity="light.fake_light_2" service="toggle" />
                <ButtonCard entity="light.fake_light_3" service="toggle" />
              </Group>
            </Column>
          </AreaCard>
          <FamilyCard title="State of two people">
            <PersonCard entity="person.john_doe" />
            <PersonCard entity="person.jane_doe" />
          </FamilyCard>
          <VacuumCard entity="vacuum.robot_vacuum" />
          <AlarmCard entity="alarm_control_panel.home_alarm" defaultCode={1234} />
        </Row>
      </Group>
    </Column>
  </Row>
}

function Connector() {
  return <HassConnect hassUrl="https://homeassistant.local:8123">
    <ThemeProvider darkMode={true} theme={{
      device: {
        sidebarCard: {
          width: {
            expanded: '25rem'
          }
        }
      }
    }} />
    <ThemeControlsModal />
    <Template />
  </HassConnect>
}

export default {
  title: "INTRODUCTION/Demo",
  tags: ['!autodocs'],
  parameters: {
    standalone: true,
    hideComponentProps: true,
    docs: {
      page: null
    },
  },
} satisfies Meta;

export type Story = StoryObj<typeof Connector>;

export const Demo = Connector.bind({});