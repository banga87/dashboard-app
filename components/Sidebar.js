import styles from '../styles/Sidebar.module.css'
import Link from 'next/link';
import Image from 'next/image';


const Sidebar = () => {
    return (
        <div className={ styles.navbar }>
            <div className={ styles.logo }>
                <h1>LOGO</h1>
            </div>
            <ul className={ styles.navbarNav }>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/">Home</Link>
                </li>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/worker">Worker</Link>
                </li>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/customer">Customer</Link>
                </li>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/service">Service</Link>
                </li>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/mobile">Mobile</Link>
                </li>
                <li className={ styles.navbarItem }>
                    <Link className={ styles.navbarLink } href="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;