import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronRight,faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Parallax, useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

function ContactInfo(props) {
    return (
      <div className={`info flex flex-col items-end pt-10 space-y-3 ${props.w}`}>
        <h1 className="sm:text-2xl text-end">{props.address}</h1>
        <p className="text-gray-500">EMAIL US DIRECTLY</p>
        <h1 className="text-xl">{props.email}</h1>
        <p className="text-gray-500">CALL US DIRECTLY</p>
        <h1 className="text-xl">{props.phone}</h1>
      </div>
    );
  }
  
const Footer =()=>{
    return(
        <div style={{backgroundColor:'rgb(28 28 28)'}} className="text-white mt-5 p-3 sm:p-10 App">
           <footer className="text-white flex p-8">
            <div className="w-full">
               <div className="title w-[60%]">
               <h1 className="text-5xl"><i className="ital">Have a project in mind?</i> <br /><span className="font-semibold">Let’s talk.</span></h1>
               <form action="">
{/* No worries, we don’t spam your inbox. */}
               <div className="border-b-[1px]  flex items-center justify-between mt-20">
               <input className='bg-inherit w-full outline-none py-4' type="email" placeholder='Enter your email address'/>
                <label htmlFor="input">Subscribe</label>
               </div>
               </form>
               <ContactInfo
                    address={<>Twosqft, Baani Square,<br /> Sector -67 Gurugram,<br/> 120045</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               </div>
             </div>
               <div className="flex flex-col">
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
       <div className=" pt-20 overflow-x-hidden">
        <Parallax 
        translateY={['0','70%']}
        speed={2}
        className='hidden  sm:relative w-full sm:flex justify-end'
        >
        <img ref={mage.ref} className='opacity-50 -top-12 right-5 opacity-1 w-[40rem] h-[30rem]' src="https://www.twosqft.com/wp-content/uploads/2022/04/img-1@2x-11.jpg" alt="" />
        </Parallax>
        <div style={{background:'rgb(28 28 28)'}} className="sm:w-[60%] relative text-white  p-3 sm:p-10 App z-20">
           <div className="flex">
            <div className="w-full">
               <div className="title">
               <h1 className="md:text-2xl sm:text-4xl w-1/2">Join us in building greatness together, leveraging our combined vision and expertise.</h1>
               <div className="flex flex-col">
               <ContactInfo
                    address={<>G-36, Outer Circle,<br/> G-Block New Delhi, 110001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />

               <div className="sm:flex md:flex-col md:items-end justify-between w-full">
               <ContactInfo
                    w={'w-1/2'}
                    address={<>B-19, Twin Tower,<br /> South Gandhi Maidan <br /> Patna, 800001</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />

                <ContactInfo
                    w={'w-1/2'}
                    address={<>Twosqft, Baani Square,<br /> Sector -67 Gurugram,<br/> 120045</>}
                    email="hello@twosqft.com"
                    phone="(+91)8294373340"
                />
               </div>
               </div>
               </div>
            </div>
           </div>
           <footer className="sm:p-4 md:p-0 text-white">
            <div className="border-t border-gray-400 my-4"></div>
            <div className="flex justify-between items-center">
            <div className="flex justify-around sm:justify-center sm:pr-0 pr-5 sm:space-x-4">
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="border rounded-full p-3 sm:p-5 transtion duration-300 hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            </div>
              <div>
             <span className='text-green-500'>•</span> Available for new projects.
            </div>
        </div>
        </footer>
        </div>
       </div>
       </>
    )
}
export{ Footer , PageFooter};