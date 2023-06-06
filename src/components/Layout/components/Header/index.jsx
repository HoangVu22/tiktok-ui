import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import images from "~/assets/images";
import styles from "./Header.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <i className="bi bi-translate"></i>,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        }
      ]
    },
  },
  {
    icon: <i className="bi bi-patch-question"></i>,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <i className="bi bi-keyboard"></i>,
    title: 'Keyboard shortcuts',
  }
]

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  // handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // handle change language
        break;
      default:
    }
  }

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          :    <PopperWrapper>
                <h4 className={cx("search-title")}>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              type="text"
              placeholder="Search accounts and videos"
              spellCheck={false}
            />
            <button className={cx("clear")}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
            {/* <i className={`bi bi-arrow-repeat ${cx('loading')}`}></i> */}

            <button className={cx("search-btn")}>
              <i className="bi bi-search"></i>
            </button>
          </div>
        </Tippy>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx("more-btn")}>
              <i className="bi bi-three-dots-vertical"></i>
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
