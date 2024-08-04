import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
  import React from "react";

  import { Bell } from "lucide-react";
import RightBar from "./RightBar";
  
  const PhoneRightBar = () => {
    return (
      <Sheet>
        <SheetTrigger><Bell className="w-4 h-4"/></SheetTrigger>
        <SheetContent side="right" className="bg-white dark:bg-[#2a2a2a] flex w-fit">
          <RightBar isVisible={true}/>
        </SheetContent>
      </Sheet>
    );
  };
  
  

export default PhoneRightBar