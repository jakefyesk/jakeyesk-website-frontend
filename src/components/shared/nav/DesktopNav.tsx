import { Card } from "@/components/ui/card";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import React from "react";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <Card className="hidden md:flex md:flex-row md:justify-between md:items-center md:w-full md:h-16 md:px-4 md:py-2">
      <div className="flex flex-start"><p>test</p></div>
      {/* <NavigationMenu className=""></NavigationMenu> */}
    </Card>
  );
};

export default DesktopNav;
