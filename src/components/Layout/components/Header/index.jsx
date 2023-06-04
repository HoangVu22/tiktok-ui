import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '~/assets/images';

console.log(images.logo)

const cx = classNames.bind(styles)

function Header() {
    return (  
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                <div className={cx('search')}>
                    <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <i className="bi bi-x-circle-fill"></i>
                    </button>
                    {/* <i className={`bi bi-arrow-repeat ${cx('loading')}`}></i> */}

                    <button className={cx('search-btn')}>
                        <i className="bi bi-search"></i>
                    </button>
                </div>

                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;