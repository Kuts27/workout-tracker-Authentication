import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img className='image' src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg" alt=""/> 
          <h1>Workout Tracker</h1>
        </Link>
      </div>
    </header>
  )
}


export default Navbar