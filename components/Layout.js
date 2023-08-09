import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from '../styles/Layout.module.css'


const Layout = ({ children }) => {
    return (
        <div className={ styles.layout }>
            <Sidebar />
            <div className={ styles.content }>
                <Header />
                { children }
            </div>
        </div>
    )
}

export default Layout;
