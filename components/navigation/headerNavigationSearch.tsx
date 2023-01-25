import { SearchIcon } from "@/resource/SearchIcon";
import { Input, Navbar } from "@nextui-org/react";

export default function HeaderNavigationSearch() {
  return (
      <Navbar.Item 
      css={{
        "@xsMax": {
          w: "100%",
          jc: "space-between",
        },
      }}
      >
        <Input
          clearable
          contentLeft={
            <SearchIcon fill="var(--nextui-colors-accents6)" size={20} />
          }
          css={{
            w: "100%",
          
            "& .nextui-input-content--left": {
              h: "100%",
              ml: "$4",
              dflex: "center",
            },
          }}
          placeholder="Search..."
        />
      </Navbar.Item>
  );
}
