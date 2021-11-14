import { Link } from "react-router-dom";

function Home() {
  return (
      <div className='page'>
          <div className='title'>
              Welcome to the Secret Santa Generator
          </div>
          <div className='get-started'>
              <Link to='/randomizer' className='button button-green'>
                  Get Started
              </Link>
          </div>
      </div>
  );
}

export default Home;
