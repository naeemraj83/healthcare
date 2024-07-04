import { TiStarFullOutline } from "react-icons/ti";
import img1 from '../assets/724f72eb2c73d3e7560e01a5f0093700.jpeg'
import img2 from '../assets/f2cf44bfa3af771f6396363d4ae67aab.jpeg'
import img3 from '../assets/d08cbe61699dcdccad10d7e4dd0904b0.jpeg'



const Testimonial = () => {
    return (
        <div className="mt-24">
            <div>
      <div>
        <h2 className="w-[139px] mx-auto h-[44px] border rounded-3xl flex justify-center items-center bg-[#FBFBFB] font mb-4">
          Testimonial
        </h2>
      </div>
      <div>
        <h1 className="text-4xl text-center text-[#020043] font-semibold mb-4">
          What they say about us
        </h1>
      </div>
      <div className="flex gap-3 w-[1100px] mx-auto">
        <div className=" w-[371px]  h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            Expertise and Compassion <br /> Combined
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div  className="flex gap-2 ">
            <img className="w-12 h-12 rounded-full" src={img1} alt="person1" />
            <div>
              <p>
                <span className="text-xs font-bold">Sarah D</span>,
                <span className="text-xs">IT Professional</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[371px] h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            Life-Saving Care, Life-Changing <br /> Experience
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-2">
            <img className="w-12 rounded-full" src={img2} alt="person2" />
            <div>
              <p>
                <span className="text-xs font-bold">Michael R</span>,
                <span className="text-xs">, Business Executive</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[371px] h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            A Partner in Health and <br />
            Wellness
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-2">
            <img className="w-12 rounded-full" src={img3} alt="person3" />
            <div>
              <p>
                <span className="text-xs font-bold">David S, </span>,
                <span className="text-xs">Lawyer</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Testimonial;