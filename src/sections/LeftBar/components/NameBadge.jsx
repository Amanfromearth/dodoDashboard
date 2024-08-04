import Avatar from "boring-avatars";

const NameBadge = () => {
  return (
    <div className="flex w-full gap-1 mb-3 items-center">
        <Avatar name="Alice Paul" size={23} colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]}  variant="beam"/>
        <span>Anurag</span>
    </div>
  )
}

export default NameBadge