import "./footer.css"
import {Link} from 'react-router-dom'
//<p>All the copy rights reserved &copy; 2022 Carlos Lopez </p>
 //  <body className="d-flex flex-column">
function Footer() {
    return (

        <footer className="footer bg-success p-2 text-dark bg-opacity-25">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
                            <p className="font-italic text-muted">"Let food be your medicine and medicine be your food" Hypocatres.</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><Link to="http://localhost:3000/#" target="_blank" rel='noreferrer'title="twitter"><i className="fa fa-twitter"></i></Link></li>
                                    <li className="list-inline-item"><Link to="http://localhost:3000/#" target="_blank" rel='noreferrer' title="facebook"><i className="fa fa-facebook"></i></Link></li>
                                    <li className="list-inline-item"><Link to="http://localhost:3000/#" target="_blank" rel='noreferrer' title="instagram"><i className="fa fa-instagram"></i></Link></li>
                                    <li className="list-inline-item"><Link to="http://localhost:3000/#" target="_blank" rel='noreferrer' title="pinterest"><i className="fa fa-pinterest"></i></Link></li>
                                    <li className="list-inline-item"><Link to="http://localhost:3000/#" target="_blank" rel='noreferrer' title="vimeo"><i className="fa fa-vimeo"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><Link to="/catalog" className="text-muted">🍊Fruits</Link></li>
                                    <li className="mb-2"><Link to="/catalog" className="text-muted">🍅Veggies</Link></li>
                                    <li className="mb-2"><Link to="/catalog" className="text-muted">💊Vitamins</Link></li>
                                    <li className="mb-2"><Link to="http://localhost:3000/#" className="text-muted">Stores</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><Link to="http://localhost:3000/#" className="text-muted">Login</Link></li>
                                    <li className="mb-2"><Link to="http://localhost:3000/#" className="text-muted">Register</Link></li>
                                    <li className="mb-2"><Link to="http://localhost:3000/#" className="text-muted">Wishlist</Link></li>
                                    <li className="mb-2"><Link to="http://localhost:3000/#" className="text-muted">Our Catalog</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Contact us</h6>
                                <p className="text-muted mb-4">We are happy to help you!!! please send us any questions or comments..</p>
                                <div className="p-1 rounded border">
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                                            <div className="input-group-append">
                                                <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light py-4">
                        <div className="container text-center">
                            <p className="text-muted mb-0 py-2">All the copy rights reserved &copy; 2022 Carlos Lopez</p>
                        </div>
                    </div>
        </footer>
    );
}

export default Footer;
