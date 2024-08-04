import ActivityFeed from "./components/ActivityFeed";
import NotificationFeed from "./components/NotificationFeed";

const RightBar = ({ isVisible }) => {
  return (
    <section
      className={`h-full p-3 pl-5 ${
        isVisible ? 'flex border-none' : 'hidden lg:flex border-l'
      } border-slate-200 dark:border-[#3f3f3f] flex-col gap-8`}
    >
      <NotificationFeed />
      <ActivityFeed />
    </section>
  );
};

export default RightBar;