
import { GoArrowUpRight } from 'react-icons/go';
import logo from '../assets/logo dark.png'
const Navbar = () => {
    return (
        <div>
             
             <div className="navbar w-[1200px] mx-auto mb-10 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
      </ul>
    </div>
    <img className='' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><a className='font-semibold'>Home</a></li>
        <li><a className='font-semibold'>Services</a></li>
        <li><a className='font-semibold'>Blog</a></li>
        <li><a className='font-semibold'>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center justify-center border w-[159px] h-[52px] font-semibold rounded-xl">
            <button>Appointment</button>
            <GoArrowUpRight style={{ fontSize: '20px' }} />
          </div>
  </div>
</div>

        </div>
    );
};

export default Navbar;