import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className="home-page">
            <h1>- Fresh Food Always -</h1>
            <Link className="btn btn-primary" to="/catalog">Check out our catalog</Link>
        </div>
    )

};

export default Home;