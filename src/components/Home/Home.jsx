import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

function Home() {
  return (
    <div className="home">
        <div className="home-text">
            <h2>Women Fragnance and Perfume</h2>
            <h1>Much More than Perfume</h1>
            <p>Discover your new favorite perfume or eau de parfum by shopping bestselling scents by 
                Swan Sha. Explore our collection of perfume by scent family,
                and find your new signature fragrance today.
            </p>
            <button className='btn'> Explore more <img src={dark_arrow}></img></button>
        </div>
    </div>
  )
}

export default Home