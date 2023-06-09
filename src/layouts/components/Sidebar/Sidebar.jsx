import classNames from "classnames/bind";
import config from "~/config";
import styles from "./Sidebar.module.scss";
import MenuSidebar from "~/layouts/components/Sidebar/MenuSidebar/MenuSidebar";
import MenuSidebarItem from "./MenuSidebar/MenuSidebarItem";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <MenuSidebar>
        <MenuSidebarItem
          title="For you"
          to={config.routes.home}
          icon={<i className={`bi bi-houses ${cx("menu-icon")}`}></i>}
          iconActive={<i className={`bi bi-houses-fill ${cx("menu-icon")}`}></i>}
        />
        <MenuSidebarItem
          title="Following"
          to={config.routes.following}
          icon={<i className={`bi bi-people ${cx("menu-icon")}`}></i>}
          iconActive={<i className={`bi bi-people-fill ${cx("menu-icon")}`}></i>}
        />
        <MenuSidebarItem
          title="LIVE"
          to={config.routes.live}
          icon={<i className={`bi bi-webcam ${cx("menu-icon")}`}></i>}
          iconActive={<i className={`bi bi-webcam-fill ${cx("menu-icon")}`}></i>}
        />
      </MenuSidebar>
    </aside>
  );
}

export default Sidebar;
