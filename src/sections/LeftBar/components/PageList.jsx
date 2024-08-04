"use client"
import React from "react";
import {
  BadgeIndianRupee,
  Settings,
  WalletCards,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import usePageStore from "@/lib/useStore";

const PageItem = ({
  icon: Icon,
  title,
  subpages,
  isOpen,
  onToggle,
  isSelected,
  onSelect,
  selectedPage,
}) => (
  <li className="flex flex-col w-full">
    <div
      className={`flex cursor-pointer items-center w-full group hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-sm p-1 pl-0 ${
        isSelected
          ? "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white"
          : "text-slate-700 dark:text-slate-300"
      }`}
      onClick={() => {
        if (subpages) {
          onToggle();
        } else {
          onSelect(title);
        }
      }}
    >
      <div
        className={`flex mr-2 justify-center items-center rounded-sm w-1 h-full border-transparent border-l-4 ${
          isSelected
            ? "border-black dark:border-white"
            : "group-hover:border-black dark:group-hover:border-white"
        }`}
      />
      <div className="flex w-full items-center rounded-sm h-full gap-1">
        <div className="w-4 flex justify-end">
          {subpages && (isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />)}
        </div>
        <Icon className="w-4 h-4" />
        {title}
      </div>
    </div>
    {isOpen && subpages && (
      <ul className="ml-6 mt-1">
        {subpages.map((subpage, subIndex) => (
          <li
            key={subIndex}
            className={`text-sm pl-4 py-1 cursor-pointer ${
              subpage === selectedPage
                ? "text-black dark:text-white font-semibold"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
            onClick={() => onSelect(subpage, title)}
          >
            {subpage}
          </li>
        ))}
      </ul>
    )}
  </li>
);

const PageList = () => {
  const { selectedPage, selectedMainPage, openPages, setSelectedPage, togglePage } = usePageStore();

  const pages = [
    { icon: WalletCards, title: "Overview", subpages: ["Dashboard"] },
    { icon: BadgeIndianRupee, title: "Transactions" },
    { icon: Settings, title: "Settings", subpages: ["Profile"] },
  ];

  return (
    <div className="w-full h-full flex mt-8 gap-3 flex-col">
      <span className="text-slate-500 dark:text-slate-400 text-sm">Pages</span>
      <ul className="flex flex-col w-full items-center text-sm">
        {pages.map((page, index) => (
          <PageItem
            key={index}
            {...page}
            isOpen={openPages[index]}
            onToggle={() => togglePage(index)}
            isSelected={selectedPage === page.title || selectedMainPage === page.title}
            onSelect={(pageOrSubpage, mainPage) => setSelectedPage(pageOrSubpage, mainPage)}
            selectedPage={selectedPage}
            selectedMainPage={selectedMainPage}
          />
        ))}
      </ul>
    </div>
  );
};

export default PageList;