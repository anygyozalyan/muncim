import { IoIosCloseCircle } from "react-icons/io";
import styles from './MobileMenu.module.css';

function MobileMenu({ links, activeLink, closeMenu }) {
    return (
        <div className={styles.mobile_menu}>
            <IoIosCloseCircle onClick={closeMenu} className={styles.close_icon} />

            <ul className={styles.mobile_links}>
                {links.map((link) => (
                    <li
                        key={link.label}
                        onClick={() => activeLink(link.label)}
                    >
                        {link.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MobileMenu;