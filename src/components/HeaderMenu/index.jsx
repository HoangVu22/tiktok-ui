import classNames from "classnames/bind";
import styles from "./HeaderMenu.module.scss";

const cx = classNames.bind(styles);

function HeaderMenu({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <i className="bi bi-chevron-left"></i>
            </button>
            <h4 className={cx('header-title')}>{ title }</h4>
        </header>
    )
}

export default HeaderMenu;
