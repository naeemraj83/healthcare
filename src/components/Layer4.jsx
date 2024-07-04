import { GoArrowUpRight } from "react-icons/go";
import logo from '../assets/logo light.png'
import img from '../assets/Rectangle 32.png'

const Layer4 = () => {
    const style = {
        backgroundImage: `linear-gradient(90deg, rgba(2, 0, 67, 1), rgba(2, 0, 67, 0.3) 100%), url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '1160px',
        height: '477px',
        color: 'white',
        padding: '20px',
        borderRadius: '24px',
      };
    return (
        <div className="w-[1150px] mt-32 mb-24 mx-auto">
           <div style={style}>
      <div className="flex justify-between items-center">
        <div className="translate-y-24 ml-14">
          <h2 className="text-4xl font-semibold mb-6 leading-relaxed">
            Get Your <br />
            First Appointment <br />
            at 50% Off!
          </h2>
          <div>
            <div className="flex gap-6">
              <div className="flex items-center justify-center  w-[159px] h-[52px] bg-[#FFC637] rounded-xl text-black">
                <button>Appointment</button>
                <GoArrowUpRight style={{ fontSize: '20px' }} />
              </div>
              <div className="flex justify-center items-center gap-1  p-3 rounded-xl w-[159px] h-[52px] border border-white">
                <button>Learn More</button>
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-8 mr-10">
          <img src={logo} alt="logo_light" />
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Layer4;