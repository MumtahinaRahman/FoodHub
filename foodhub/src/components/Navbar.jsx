import '../styles/index.scss';

function Navbar() {
    return ( 
        <div className="navbar container">
            <a href="#!" className="logo">Food<span>Hub</span></a>
            <div className="nav-links">
                <a href="#!">Home</a>
                <a href="#!">Recipes</a>
                <a href="#!">Settings</a>
        </div>
     );
}

export default Navbar;