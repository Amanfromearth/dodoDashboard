import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import React from "react";
import LeftBar from "./LeftBar";
import { Sidebar } from "lucide-react";

const PhoneLeftBar = () => {
  return (
    <Sheet>
      <SheetTrigger><Sidebar className="w-4 h-4"/></SheetTrigger>
      <SheetContent side="left" className="bg-white dark:bg-[#2a2a2a] flex w-fit">
        <LeftBar isVisible={true}/>
      </SheetContent>
    </Sheet>
  );
};

export default PhoneLeftBar;
