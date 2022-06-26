import "./footer.css"

//<p>All the copy rights reserved &copy; 2022 Carlos Lopez </p>
 //  <body className="d-flex flex-column">
function Footer() {
    return (

        <footer className="footer bg-white">
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" className="mb-3"/>
                            <p className="font-italic text-muted">"Let food be your medicine and medicine be your food" Hypocatres.</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><a href="http://localhost:3000/#" target="_blank" rel='noreferrer'title="twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/#" target="_blank" rel='noreferrer' title="facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/#" target="_blank" rel='noreferrer' title="instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/#" target="_blank" rel='noreferrer' title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                                    <li className="list-inline-item"><a href="http://localhost:3000/#" target="_blank" rel='noreferrer' title="vimeo"><i className="fa fa-vimeo"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">🍊Fruits</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">🍅Veggies</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">💊Vitamins</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">Stores</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">Login</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">Register</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">Wishlist</a></li>
                                    <li className="mb-2"><a href="http://localhost:3000/#" className="text-muted">Our Catalog</a></li>
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
