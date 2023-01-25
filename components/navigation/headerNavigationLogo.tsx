import { OrchidzLogo } from "@/public/orchidzLogo";
import { Navbar } from "@nextui-org/react";

export default function HeaderNavigationLogo() {
    return (
        <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <OrchidzLogo />
      </Navbar.Brand>
    )
}
