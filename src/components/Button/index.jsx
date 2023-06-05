import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disable = false,
  rounded = false,
  small = false,
  large = false,
  children,
  className,
  iconBtnLeft,
  iconBtnRight,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  // khi btn bị disable thì sẽ k onclick đc
  if (disable) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    disable,
    rounded,
    small,
    large,

    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {iconBtnLeft && <span className={cx("icon")}>{iconBtnLeft}</span>}
      <span className={cx('title')}>{children}</span>
      {iconBtnRight && <span className={cx("icon")}>{iconBtnRight}</span>}
    </Comp>
  );
}

export default Button;
