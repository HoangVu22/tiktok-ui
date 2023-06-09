import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1686448800&x-signature=CGIusvXL88VCEgX6XQPCmWHnYb8%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>

      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>HoangVu-22</strong>
          <i className={`bi bi-check-circle-fill ${cx("check")}`}></i>
        </p>
        <p className={cx("name")}>Nguyễn Hoàng Vũ</p>

        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("lable")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("lable")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
