import "./footer.css"

function Footer() {
    return (

        <footer className="footer">
            <div className="container-footer">

                            <div className="column0">
                                <ul className="list">
                                    <li><a href="http://localhost:3000/#">Product</a></li>
                                    <li><a href="http://localhost:3000/#">Benefits</a></li>
                                    <li><a href="http://localhost:3000/#">Partners</a></li>
                                    <li><a href="http://localhost:3000/#">Team</a></li>
                                </ul>
                            </div>
                            <div className="column1">
                            <p>All the copy rights reserved &copy; 2022 Carlos Lopez </p>
                                <ul className="list">
                                    <li><a href="http://localhost:3000/#">Documentation</a></li>
                                    <li><a href="http://localhost:3000/#">Support</a></li>
                                    <li><a href="http://localhost:3000/#">Legal Terms</a></li>
                                    <li><a href="http://localhost:3000/#">About</a></li>
                                </ul>
                            </div>
                    <div className="column2">
                        <h5 className="text-md-right">Contact Us</h5>
                        <form>
                            <fieldset className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                            </fieldset>
                            <fieldset className="form-group">
                                <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset className="form-group text-xs-right">
                                <button type="button" className="btn btn-secondary-outline btn-lg">Send</button>
                            </fieldset>
                        </form>
                    </div>  {/*column2*/}
 
                          </div>
                          
        </footer>
    );
}

export default Footer;
