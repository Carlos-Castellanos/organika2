// import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css"
import { Link } from 'react-router-dom'
import {useContext} from 'react';           // react context
import StoreContext from './../context/storeContext'  // react context

// import { MenuItems } from "./MenuItems";

function Navbar() {
    let cart = useContext(StoreContext).cart;
    return (
        <nav className="navbar navbar-expand-lg bg-success p-2 text-dark bg-opacity-25">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Organika</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-collapsed navbar-toggler-icon"> &laquo; </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item text-white">
                            <Link className="nav-link active text-black" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to="/about">About</Link>
                        </li>
                        <li className="nav-item dropdown text-black">
                            <Link className="nav-link dropdown-toggle text-black" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="http://localhost:3000/#">🍊 Fruits</Link></li>
                                <li><Link className="dropdown-item" to="http://localhost:3000/#">🍅 Veggies</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="http://localhost:3000/#">💊 Vitamins</Link></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link " to="http://localhost:3000/#">🛒</Link>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <Link className="btn btn-outline-dark" to="/cart">
                            🛒-
                            <span className='badge bg-primary'>{cart.length} </span>
                        - View Cart</Link>
                    </form>
                </div>
            </div>
        </nav>
        //  <section>
        //     <nav className="NavbarItems">
        //         <h1>Organika</h1>
        //         <div></div>
        //         <ul className="navbar">
        //                {MenuItems.map((item, index) => {
        //                 return (
        //                     <li key={index}>
        //                         <Link className={item.cName} to={item.url}>
        //                             <span className="icon">{item.icon}</span>
        //                             <span className="title">{item.Title}</span>
        //                         ></Link>
        //                     </li>
        //                 );
        //             })}
        //         </ul>
        //     </nav>
        // </section> 
    );
}

export default Navbar;


