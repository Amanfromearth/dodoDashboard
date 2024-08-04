import Avatar from "boring-avatars";

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      avatar: "bg-green-400",
      text: "Discount details updated",
      time: "Just now",
    },
    {
      id: 2,
      avatar: "bg-yellow-400",
      text: "Aman added a new product",
      time: "59 minutes ago",
    },
    {
      id: 3,
      avatar: "bg-blue-400",
      text: "Refunds cleared",
      time: "12 hours ago",
    },
    {
      id: 4,
      avatar: "bg-purple-400",
      text: "Tax report download comp...",
      time: "Today, 11:59 AM",
    },
    {
      id: 5,
      avatar: "bg-gray-400",
      text: "Product details updated",
      time: "Feb 2, 2023",
    },
  ];

  return (
    <div className="flex flex-col">
      <span className="font-medium mb-4">Activites</span>
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center mb-4 gap-2 last:mb-0"
        >
          <Avatar name={activity.avatar} colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]} size={28} variant="beam" />
          <div className="w-full flex flex-col">
            <p className="text-xs font-normal text-gray-900 dark:text-gray-100">{activity.text}</p>
            <p className="text-xs text-gray-400">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
