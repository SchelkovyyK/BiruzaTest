import homeBack from "/images/pexels-emrecan-2079246.jpg"
import "./Home.scss"
function Home() {
    return ( 
        <div className="home">
            <img className="home__HomeImage" src={homeBack} alt="" />
        </div>
     );
}

export default Home;