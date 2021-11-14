const { Link } = require("react-router-dom");

function Header() {
    return (
        <div className='header'>
            <Link className='button' to='/'>
                Secret Santa Randomizer
            </Link>
        </div>
    );
  }
  
  export default Header;
  