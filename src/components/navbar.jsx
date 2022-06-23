import "./navbar.css"
import { MenuItems } from "./MenuItems";

function Navbar() {
    return (
        <section>
            <nav className="NavbarItems">
                <h1>Organika</h1>
                <div></div>
                <ul className="navbar">
                       {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.Title}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </section>
    );
}

export default Navbar;
