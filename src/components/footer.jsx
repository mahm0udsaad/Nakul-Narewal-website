import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight,faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

function ContactInfo(props) {
    return (
      <div className={`info flex w-full flex-col items-end pt-10 space-y-3 ${props.w}`}>
        <h1 className="sm:text-2xl text-end">{props.address}</h1>
        <p className="text-[#ffffff7a] text-sm font-semibold">EMAIL US DIRECTLY</p>
        <h1 className="text-xl">{props.email}</h1>
        <p className="text-[#ffffff7a] text-sm font-semibold">CALL US DIRECTLY</p>
        <h1 className="text-xl">{props.phone}</h1>
      </div>
    );
  }
  function ContactInfoGrid(props) {
    return (
      <div className={`info pt-20 space-y-3 ${props.w}`}>
        <h1>{props.city}</h1>
        <div className="sm:flex sm:space-x-8 py-4 text-[#ffffff7a] text-sm">
        <div>
           <p classNa me="">{props.address}</p>
         </div>
         <div className='sm:pl-8 py-4 sm:text-center sm:w-60'>
             <h1 >{props.phone}</h1>
             <h1 >{props.email}</h1>
         </div>
    
        </div>
      </div>
    );
  }
const Footer =()=>{
    return(
        <div style={{backgroundColor:'rgb(28 28 28)'}} className="text-white mt-5 p-3 sm:p-10 App">
           <footer className="text-white sm:flex p-8">
            <div className="w-full">
               <div className="title sm:w-[60%]">
               <h1 className="text-5xl"><i className="ital">Have a project in mind?</i> <br /><span className="font-semibold">Let’s talk.</span></h1>
               <form action="">
{/* No worries, we don’t spam your inbox. */}
               <div className="border-b-[1px]  flex items-center justify-between mt-20">
               <input className='bg-inherit w-full outline-none py-4' type="email" placeholder='Enter your email address'/>
                <label htmlFor="input">Subscribe</label>
               </div>
               <p className='text-[#ffffff7a] text-sm pt-4'>No worries, we don’t spam your inbox.</p>
               </form>
               <ContactInfo
                    address={<>Twosqft, Baani Square,<br /> Sector -67 Gurugram,<br/> 120045</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               </div>
             </div>
               <div className="flex flex-col sm:w-1/2">
               <ContactInfo
                    address={<>G-36, Outer Circle,<br/> G-Block New Delhi, 110001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               <ContactInfo
                    address={<>B-19, Twin Tower,<br /> South Gandhi Maidan <br /> Patna, 800001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               </div>
        </footer>
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex justify-between items-center">
            <div className="flex sm:pr-0 pr-5 sm:space-x-4">
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="border rounded-full p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
              <div>
              <span className='text-green-500'>•</span> Available for new projects.
            </div>
            </div>
        </div>
    )
}
const PageFooter = () =>{
    const mage = useParallax({
        scale: [1, 1.2, 'easeInQuad'],
      });
    return(
       <>
       <div className="overflow-hidden">
        <Parallax 
        translateY={['0','70%']}
        speed={2}
        className=' sm:relative w-full sm:flex justify-end'
        >
        <img ref={mage.ref} className='opacity-50 -top-12 right-5 opacity-1 w-[40rem] h-[30rem]' src="https://www.twosqft.com/wp-content/uploads/2022/04/img-1@2x-11.jpg" alt="" />
        </Parallax>
        <div style={{background:'black'}} className="w-[80%] h-full relative text-white  sm:p-20 App z-20">
           <div className="flex p-8">
            <div className="w-1/2">
               <div className="title">
               <h1 className="md:text-5xl sm:text-6xl">Join us in building greatness together, leveraging our combined vision and expertise.</h1>
               <div className="flex flex-col">
               <ContactInfoGrid
                    city={"New Delhi"}
                    address={<>G-36, Outer Circle,<br/> G-Block New Delhi, 110001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />

               <div className="sm:flex flex flex-col w-full">
               <ContactInfoGrid
                    city={"Gurugram"}
                    address={<>B-19, Twin Tower,<br /> South Gandhi Maidan <br /> Patna, 800001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />

                <ContactInfoGrid
                    city={"Patna"}
                    address={<>Twosqft, Baani Square,<br /> Sector -67 Gurugram,<br/> 120045</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               </div>
               </div>
               </div>
            </div>
             <div className="hidden sm:flex flex-col items-center justify-center w-1/2">
             <p className='w-11/12 mx-auto text-sm text-[#ffffff7a]'>
               Leverage our extraordinary design and engineering team, combining unrivaled creativity with technical brilliance, to deliver awe-inspiring solutions that push boundaries and exceed expectations.

                If you're interested to join our team, please visit our career section.
               </p>
             </div>
           </div>
             <a href="#" className="text-3xl hover:text-gray p-8">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="text-3xl hover:text-gray p-8">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
       </div>
       </>
    )
}
export{ Footer , PageFooter};