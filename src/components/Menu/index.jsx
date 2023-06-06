import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./Menu.module.scss";
import MenuItem from "./MenuItems";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import HeaderMenu from "../HeaderMenu";
import { useState } from "react";

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children, items = [], onChange = {defaultFn} }) {
  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children

      return <MenuItem key={index} data={item} onClick={() => {
        if (isParent) {
          setHistory(prev => [...prev, item.children])
        } else {
          onChange(item)
        }
      }} />
    });
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      onHide={() => setHistory((prev) => prev.slice(0, 1))} // khi di chuột ra thì tự động trả về cấp 1
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-items")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-list")}>
            {history.length > 1 && <HeaderMenu title='Languages' onBack={() => {
              setHistory(prev => prev.slice(0, prev.length - 1))
            }} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
          {children}
    </Tippy>
  );
}

export default Menu;
