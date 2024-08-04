import { ModeToggle } from "@/components/modetoggle";
import {
    Command,
    Search,
    Sidebar,
    Star,
  } from "lucide-react";
import Breadcrumb from "./BreadCrumb";
import PhoneLeftBar from "@/sections/LeftBar/PhoneLeftBar";
import PhoneRightBar from "@/sections/RightBar/PhoneRightBar";
  
  const NavItem = ({ children, className = "" }) => (
    <div className={`flex items-center ${className}`}>{children}</div>
  );
  

  
  const SearchBar = () => (
    <div className="hidden lg:flex items-center bg-gray-100 dark:bg-[#3f3f3f] rounded-md px-3 py-2 w-64">
      <Search className="w-4 h-4 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-full text-gray-700 focus:outline-none text-sm"
      />
      <NavItem>
        <Command className="w-4 h-4 text-gray-400 mr-1" />
        <span className="text-xs text-gray-400">/</span>
      </NavItem>
    </div>
  );
  
const CentereNav = () => {
  return (
    <nav className="w-full p-1 px-3 lg:px-8 border-b sticky top-0 bg-background z-20 border-slate-200 dark:border-[#3f3f3f] flex items-center justify-between">
        <NavItem className="text-sm gap-4">
          <PhoneLeftBar/>
          <button className="p-1 hidden lg:block hover:bg-gray-100 rounded-full">
      <Star className="w-4 h-4" />
    </button>
          <Breadcrumb/>
        </NavItem>
        <NavItem className="text-sm gap-3">
          <SearchBar />
          <PhoneRightBar/>
          <ModeToggle/>
        </NavItem>
      </nav>
  )
}

export default CentereNav