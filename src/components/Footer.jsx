import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo light.png'

import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
      <div className="text-white flex justify-evenly mt-10 bg-[#291a7c] items-center p-20">
      <div className="space-y-6">
        <img src={logo} alt="" />
        <h2>
          123 Main Street Anytown, <br /> USA Postal Code: 12345
        </h2>
        <p>
          Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
        </p>
      </div>
      <div>
        <ul className="space-y-6">
          <li>Home </li>
          <li>About us</li>
          <li>Success Page</li>
          <li>Terms and condition</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-6">
          <li>Services </li>
          <li>Scheduling</li>
          <li>Contact Us</li>
          <li>Patient Portal</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-6">
          <li>Follow Us </li>
          <li><div className='flex gap-2 text-lg'>
            <h1><FaFacebook /></h1>
            <h1><FaInstagram /></h1>
            <h1><FaLinkedin/></h1>
            <h1><IoLogoYoutube /></h1>
            </div></li>
          <li>@docplus 2024</li>
        </ul>
      </div>
    </div>
    );
};

export default Footer;