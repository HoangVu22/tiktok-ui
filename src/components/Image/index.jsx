import PropTypes from 'prop-types';
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";

// const cx = classNames.bind(styles);

const Image = forwardRef(({ src, className, ...props }, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.noImage);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      {...props}
      onError={handleError}
      alt="img"
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
}

export default Image;
