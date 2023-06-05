import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img src="https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg" alt="" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Hoàng Vũ</span>
                    <i className={`bi bi-check-circle-fill ${cx('check')}`}></i>
                </h4>
                <span className={cx('userName')}>Zone-22</span>
            </div>
        </div>
    );
}

export default AccountItem;