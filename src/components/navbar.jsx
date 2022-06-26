import "./navbar.css"
// import { MenuItems } from "./MenuItems";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000/#">Organika</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-collapsed navbar-toggler-icon"> &laquo; </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="http://localhost:3000/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="http://localhost:3000/#">Action</a></li>
                                <li><a className="dropdown-item" href="http://localhost:3000/#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="http://localhost:3000/#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="http://localhost:3000/#">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
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
        //                         <a className={item.cName} href={item.url}>
        //                             <span className="icon">{item.icon}</span>
        //                             <span className="title">{item.Title}</span>
        //                         </a>
        //                     </li>
        //                 );
        //             })}
        //         </ul>
        //     </nav>
        // </section> 
    );
}

export default Navbar;


