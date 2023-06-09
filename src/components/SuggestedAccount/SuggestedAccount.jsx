import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccount.module.scss';
import SuggestedAccountItem from './SuggestedAccountItem';

const cx = classNames.bind(styles)

function SuggestedAccount({ lable }) {
    return (  
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>

            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />
            <SuggestedAccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes =  {
    lable: PropTypes.string.isRequired,
}

export default SuggestedAccount;