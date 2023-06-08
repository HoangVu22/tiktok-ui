import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { Link } from "react-router-dom";

import config from "~/config";
import images from "~/assets/images";
import styles from "./Header.module.scss";
import Button from "~/components/Button/Button";
import Menu from "~/components/Menu/Menu";
import Image from "~/components/Image/Image";
import Search from "../Search/Search";
// import { MessageIcon } from "~/components/Icons/index.jsx";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <i className="bi bi-translate"></i>,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <i className="bi bi-patch-question"></i>,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <i className="bi bi-keyboard"></i>,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        // handle change language
        break;
      default:
    }
  };

  const currentUser = true;

  const userMenu = [
    {
      icon: <i className="bi bi-person"></i>,
      title: "View profile",
      to: "/@Vincent",
    },
    {
      icon: <i className="bi bi-coin"></i>,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <i className="bi bi-gear-wide"></i>,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <i className="bi bi-box-arrow-right"></i>,
      title: "Log out",
      to: "/logout",
      separate: true, // cái nào có class này thì có  gạch trên đầu
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img src={images.logo} alt="tiktok" />
          </Link>
        </div>

        {/* Search */}
        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <i className="bi bi-cloud-upload"></i>
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <i className="bi bi-send-check"></i>
                  {/* <MessageIcon /> */}
                </button>
              </Tippy>
              <Tippy content="Mail box" placement="bottom">
                <button className={cx("action-btn")}>
                  <i className="bi bi-mailbox"></i>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://phongreviews.com/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-trai-11.jpg"
                alt="Nguyễn Hoàng Vũ"
              />
            ) : (
              <button className={cx("more-btn")}>
                <i className="bi bi-three-dots-vertical"></i>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
