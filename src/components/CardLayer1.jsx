import img1 from'../assets/camera.png'
import img2 from'../assets/Group.png'
import img3 from'../assets/Group_12.png'
import img4 from'../assets/Group_7.png'
import img5 from '../assets/Icons.png'

const CardLayer1 = () => {
    return (
        <section>
            <p className='font-bold text-5xl text-center translate-y-[90px] mx-auto w-[500px]'>Comprehensive Care for Every Patient</p>
            <div className="flex gap-4 w-[1140px] mx-auto">
            <div className="card border bg-base-100 w-64 shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-4xl">90%</h2>
    <p className='w-[160px] font-normal'> Patient satisfaction rate, reflecting our commitment</p>
    <img className='w-40' src={img3} alt="" />
   
  </div>
</div>

<div className="card border bg-base-100 w-52 h-56 mt-auto shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-4xl">500+</h2>
    <p className='w-[130px]'> Board-certified doctors</p>
    <img className='w-20 mx-12' src={img5} alt="" />
   
  </div>
</div>

<div className="card border bg-base-100 w-52 h-52 mt-auto shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-4xl">4.8</h2>
    <p>over 20,000 patient</p>
    <img className='w-24' src={img4} alt="" />
    
  </div>
</div>


<div className="card border bg-base-100 w-52 h-56 mt-auto shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-4xl">$5000</h2>
    <p className='w-[130px]'>Money spend for poor patient</p>
    <img className='w-20 mx-12' src={img2} alt="" />
   
  </div>
</div>


<div className="card bg-base-100 w-64 border shadow-xl">
  <div className="card-body">
    <h2 className="font-bold text-4xl">50 +</h2>
    <p className='w-[160px] font-normal'>
Free lession video 
for patient</p>
    <img className='w-40' src={img1} alt="" />
   
  </div>
</div>
        </div>
        </section>
    );
};

export default CardLayer1;