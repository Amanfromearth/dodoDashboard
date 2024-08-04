import React from 'react';
import { BugIcon, PartyPopper, User, UserCheck2Icon } from "lucide-react";

const NotificationIcon = ({ icon: Icon }) => (
  <div className="p-2 rounded-2xl bg-slate-200 dark:bg-[#e3f5ff] dark:text-black">
    <Icon className="w-4 h-4" />
  </div>
);

const NotificationItem = ({ avatar, text, time }) => (
  <div className="flex items-center mb-4 gap-2 last:mb-0">
    <NotificationIcon icon={avatar} />
    <div className="w-full flex flex-col">
      <p className="text-xs font-normal text-gray-900 dark:text-gray-100 truncate">{text}</p>
      <p className="text-xs text-gray-400">{time}</p>
    </div>
  </div>
);

const NotificationFeed = () => {
  const notifications = [
    {
      id: 1,
      avatar: BugIcon,
      text: "You have an issue that nee...",
      time: "Just now",
    },
    {
      id: 2,
      avatar: User,
      text: "New team member joined",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: PartyPopper,
      text: "Sales crossed 100k",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: UserCheck2Icon,
      text: "New product feature availa...",
      time: "Today, 11:59 AM",
    },
  ];

  return (
    <div className="flex flex-col">
      <span className="font-medium mb-4">Notifications</span>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default NotificationFeed;