import styles from '../styles/Sidebar.module.css'
import Link from 'next/link';


const Sidebar = () => {
    return (
        <div className={ styles.sidebar }>
            <div>COMPANY LOGO</div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/worker">Worker</Link>
                </li>
                <li>
                    <Link href="/customer">Customer</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>
                <li>
                    <Link href="/mobile">Mobile</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;