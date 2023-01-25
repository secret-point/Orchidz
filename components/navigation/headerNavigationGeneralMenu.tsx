import { Navbar } from "@nextui-org/react";


export default function HeaderNavigatonGeneralMenu() {
    return (
        <Navbar.Content activeColor="default" hideIn="xs" variant="default">
          <Navbar.Link href="/gaming">Gaming</Navbar.Link>
          <Navbar.Link href="/explore">Explore</Navbar.Link>
          <Navbar.Link href="/ranking">Ranking</Navbar.Link>
          <Navbar.Link href="/chat">Chat</Navbar.Link>
          <Navbar.Link href="/analytics">Analytics</Navbar.Link>
        </Navbar.Content>
    )
}
