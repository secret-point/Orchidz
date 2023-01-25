import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Button,
  Input,
} from "@nextui-org/react";
import React from "react";
import HeaderNavigatonGeneralMenu from "./headerNavigationGeneralMenu";
import HeaderNavigationLogo from "./headerNavigationLogo";
import HeaderNavigationSearch from "./headerNavigationSearch";

export default function HeaderNavigation() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const collapseItemsLoggedIn = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const collapseItems = [
    "Launchpad",
    "Gaming",
    "Explore",
    "Ranking",
    "Chat",
    "Analytics",
  ];
  const handleActionMenu: any = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <Navbar isBordered variant="static" maxWidth={"xl"}>
        <Navbar.Toggle showIn="xs" />
        <HeaderNavigationLogo></HeaderNavigationLogo>

        <Navbar.Content
          css={{
            "@sm": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <HeaderNavigatonGeneralMenu></HeaderNavigatonGeneralMenu>
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => handleActionMenu()}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItemsLoggedIn.map((item, index) => (
            <Navbar.CollapseItem key={item} activeColor="warning">
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar isBordered variant="static" maxWidth={"xl"}>
      <Navbar.Toggle showIn="xs" />
      <HeaderNavigationLogo></HeaderNavigationLogo>
      <Navbar.Content
        css={{
          "@sm": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <HeaderNavigationSearch></HeaderNavigationSearch>
        <HeaderNavigatonGeneralMenu></HeaderNavigatonGeneralMenu>
        <Navbar.Item>
          <Button
            auto
            flat
            as={Link}
            href="#"
            onClick={() => setIsLoggedIn(true)}
          >
            Create
          </Button>
        </Navbar.Item>
        <Navbar.Link color="inherit" href="#">
          My Account
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item} activeColor="warning">
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
