import  { useEffect, useState } from 'react'
import './Navbar.css'
import swan from '../../assets/swan.png';
import { Link } from 'react-scroll';
import searchicon from '../../assets/searchicon.png'

const Navbar = () => {

    const[sticky,setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[])
  return (
    <nav className={` ${sticky ? 'dark-nav' : ''}`}>
        <Link to='hero' smooth={true} offset={0} duration={500}><img src={swan} alt="logo" className='logo' /></Link>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Shop</Link></li>
            <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Sale</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} >Contact us</Link></li>
        </ul>
        <div className="search-container relative">
          <input type="text" className="search-bar" placeholder="Search" />
          <img src={searchicon} alt="Search Icon" className="search-icon absolute " />
        </div>

    </nav>
  )
}

export default Navbar