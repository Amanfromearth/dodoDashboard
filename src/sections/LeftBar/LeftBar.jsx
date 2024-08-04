import Favorites from "./components/Favorites";
import NameBadge from "./components/NameBadge";
import PageList from "./components/PageList";

const LeftBar = ({ isVisible }) => {
  return (
    <section 
      className={`h-full p-3 pr-5 ${
        isVisible ?  'flex border-none' : 'hidden xl:flex border-r'
      }  border-slate-200 dark:border-[#3f3f3f] flex-col`}
    >
      <NameBadge />
      <Favorites />
      <PageList />
    </section>
  );
};

export default LeftBar;