import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; // hỗ trợ active khi bấm vào nó
import classNames from 'classnames/bind';
import styles from './MenuSidebar.module.scss'

const cx = classNames.bind(styles)

function MenuSidebarItem({title, to, icon, iconActive}) {
    return (  
        <NavLink className={(nav) => cx('menu-sidebar-item', { active: nav.isActive })} to={to}>
            <span className={cx('icon')}>{ icon }</span>
            <span className={cx('icon-active')}>{ iconActive }</span>
            <span className={cx('menu-sidebar-title')}>{ title }</span>
        </NavLink>
    );
}

MenuSidebarItem.propTypes =  {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    iconActive: PropTypes.node.isRequired,
}

export default MenuSidebarItem;