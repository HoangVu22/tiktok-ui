// import PropTypes from "prop-types";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./SuggestedAccount.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function SuggestedAccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1686448800&x-signature=CGIusvXL88VCEgX6XQPCmWHnYb8%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>HoangVu-22</strong>
              <i className={`bi bi-check-circle-fill ${cx("check")}`}></i>
            </p>
            <p className={cx("name")}>Nguyễn Hoàng Vũ</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

SuggestedAccountItem.propTypes = {};

export default SuggestedAccountItem;
