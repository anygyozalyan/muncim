import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { CgMenuRightAlt } from "react-icons/cg";
import MobileMenu from './MobileMenu';

function Navbar() {
    const [activeLink, setActiveLink] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)

    const links = [
        { label: 'Home', id: 'home' },
        { label: 'Who works', id: 'who-works' },
        { label: 'How we work', id: 'how-we-work' },
        { label: 'Contact', id: 'contact' },
        { label: 'Sign up', id: 'signup', special: true },
    ];
    const mobileLinks = links.filter(link => !link.special);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const matchedLink = links.find(link => link.id === id);
                    if (matchedLink) {
                        setActiveLink(matchedLink.label);
                    }
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        links.forEach(link => {
            const section = document.getElementById(link.id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            links.forEach(link => {
                const section = document.getElementById(link.id);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, [links]);

    const handleActiveLink = (linkLabel) => {
        setActiveLink(linkLabel);
        setOpenMenu(false);

        const link = links.find(l => l.label === linkLabel);
        if (link) {
            const section = document.getElementById(link.id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    const handleOpenMenu = () => {
        setOpenMenu(true)
    }
    const handleCloseMenu = () => {
        setOpenMenu(false)
    }

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navigation}>
                {links.map(link => (
                    <button
                        key={link.label}
                        className={`${activeLink === link.label ? styles.active : ''} ${link.special ? styles.signUpButton : ''}`}
                        onClick={() => handleActiveLink(link.label)}
                    >
                        {link.label}
                    </button>
                ))}
            </ul>

            <div className={styles.mobile_block}>
                <button className={styles.mobile_signup}>Sign up</button>
                <CgMenuRightAlt onClick={handleOpenMenu} className={styles.burger_menu} />
            </div>

            {openMenu && (
                <MobileMenu
                    links={mobileLinks}
                    activeLink={handleActiveLink}
                    closeMenu={handleCloseMenu}
                />
            )}
        </nav>
    )
}

export default Navbar