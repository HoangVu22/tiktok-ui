import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return ( 
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt={data.full_name} className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <i className={`bi bi-check-circle-fill ${cx('check')}`}></i>}
                </h4>
                <span className={cx('userName')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;