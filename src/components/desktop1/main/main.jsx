import "./main.scss"
import goat from "/images/pexels-chane-bruwer-424963865-30238892.jpg"
function Main() {
    return ( 
        <main className="main">
            <img src={goat} alt="" className="main__image" />
        </main>
     );
}

export default Main;