import { useState ,useEffect, useRef} from 'react'
import '../App.css'
import {Footer} from '../components/footer'
import TextAnimation from '../components/header'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDraftingCompass, faClipboardList, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { Parallax , useParallax ,useParallaxController} from 'react-scroll-parallax'
import { ContentSquare} from '../components/content';
import transition from '../utiles/transition'
import image1 from '../assets/photo_2023-09-23_14-15-56.jpg';
import image2 from '../assets/photo_2023-09-23_14-16-07.jpg';
import image3 from '../assets/photo_2023-09-23_14-16-10.jpg';
import image4 from '../assets/photo_2023-09-23_14-16-14.jpg';
import image5 from '../assets/photo_2023-09-23_14-16-16.jpg';
import image6 from '../assets/photo_2023-09-23_14-16-18.jpg';

const images = [image1, image2, image3, image4, image5, image6];

function Home({colr ,  setIsCollapOpen}) {
  const firstRef = useRef(null)
  const landRef = useRef(null)
  const second = useRef(null)
  const last = useRef(null)
  const ref = useRef(null)
  const isSecondView = useInView(second)
  const isFirstView = useInView(firstRef)
  const isLandViwed = useInView(landRef)
  const isLastView = useInView(last)
  const isInView = useInView(ref)
  const [currentImage,setCurrentImage] = useState(0)
  const [isMouseEnter , setMouseEnter] = useState(false)
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
        );
      };
    }, []);
  const serviceIcons = [
    {
      name: 'Site Analysis & Spatial Programming',
      icon: faCogs,
      description: 'We completely comprehend your needs and requirements with which we tailor the project’s program.',
    },
    {
      name: 'Architectural Design',
      icon: faDraftingCompass,
      description: 'Through a unique combination of engineering, construction, design disciplines and expertise we come up with the best solution for you.',
    },
    {
      name: 'Planning & Estimation',
      icon: faClipboardList,
      description: 'Build a solid foundation for your construction project\'s success through comprehensive budgeting and meticulous planning.',
    },
    {
      name: 'Management & Construction',
      icon: faBuilding,
      description: 'Harness the power of strategic management and impeccable execution to realize your project\'s vision.',
    },
  ];
  return (  
    <>
      <div>
      <section className='main'>
        <div className="main" onClick={()=>setIsCollapOpen(false)}>
        <TextAnimation />
        </div>
      </section>
      <section >
        <div className="w-11/12 mx-auto">
        <div className="mt-12 sm:flex  text-black sm:mx-auto justify-between">
          <div className="lab sm:w-1/2 text-4xl">
            <p className='text-sm font-semibold text-gray-700 pb-8'>OUR PROJECTS</p>
            <i className='ital text-4xl'>design , construct , transcend-</i><br />
            <h2 className="text-4xl font-semibold">beyond square footage</h2>
          </div>
          <div className="lab pt-5 sm:w-1/2 flex items-center">
            <p>With a focus on collaboration, attention to detail, and unwavering commitment to quality,<br /> we are dedicated to creating beautiful, functional, and enduring spaces.</p>
          </div>
        </div>
        <div 
          ref={firstRef}
        className="flex flex-col-reverse sm:flex-row mt-10 w-full justify-between">
          <motion.img 
          initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
          animate={{ clipPath:isFirstView?  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
          transition={{duration:1 }}
          className='sm:w-[64%] lg:w-1/2 lg-p-0 md:p-0 p-2 mt-5' src="https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-9-1536x1229.png" alt="about" />
                 <div className="flex justify-center items-center w-11/12 mx-auto">
                <motion.div
                  initial={{y:50 , opacity: 0}}
                  animate={{y:isSecondView?0 : 50 , opacity:isSecondView? 1:0}}
                  transition={{duration:1.2}}  
                ref={second}
                className="flex flex-col text-center items-center justify-center">
                  <p className='pb-4'>OUR PROJECTS</p>
                  <i className='text-5xl ital '>Residential</i>
                  <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
                </motion.div>
               </div>
              </div>
              <div className="sm:flex mt-10 w-full justify-between">
                <div className="flex justify-center items-center w-full">
                <motion.div
                  initial={{y:50 , opacity: 0}}
                  animate={{y:isFirstView?0 : 50 , opacity:isFirstView? 1:0}}
                  transition={{duration:1.2}}
                  className="flex flex-col text-center items-center justify-center">
                  <p className='pb-4'>OUR PROJECTS</p>
                  <i className='text-4xl ital'>Commercial</i>
                  <p className="underline transtion duration-300 hover:text-orange-200">Learn more</p>
                </motion.div>
                </div>
                <motion.img 
                initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
                animate={{ clipPath:isFirstView?  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
                transition={{duration:1}}
                className='sm:w-1/2 lg-p-0 md:p-0 p-2 mt-5' src='https://www.twosqft.com/wp-content/uploads/2023/02/MicrosoftTeams-image-3-1536x864.jpg' alt="about" />
              </div>
        </div>
       <div onMouseMove={()=>setMouseEnter(true)} onMouseLeave={()=>setMouseEnter(false)} className="sm:flex sm:w-11/12 mx-auto sm:justify-start m-5 pt-8 relative">
        {isMouseEnter &&
         <motion.div 
        initial={{x:0 , y:0 }}
        animate={{x:mousePos.x  , y:mousePos.y -300 }}
        className='absolute  w-[20rem] h-[30rem] overflow-hidden'>
         <AnimatePresence mode='wait'>
         <motion.img 
           key={currentImage}
           initial={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}
           animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
           transition={{duration:.5}}
          src={images[currentImage]} alt="hoverd" className='h-full w-full' />
         </AnimatePresence>
        </motion.div>}
        <ul className='mx-2 clist'>
          <li onMouseMove={()=> setCurrentImage(1)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Creative .</li>
          <li onMouseMove={()=> setCurrentImage(2)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Functional .</li>
          <li onMouseMove={()=> setCurrentImage(5)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Luxurious .</li>
        </ul>
        <ul className='mx-2 clist'>
          <li onMouseMove={()=> setCurrentImage(4)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Influential .</li>
          <li onMouseMove={()=> setCurrentImage(3)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Landmark .</li>
          <li onMouseMove={()=> setCurrentImage(0)} className='text-5xl lg:text-8xl hover:text-white hover:z-50'>Expressive .</li>
        </ul>
      </div>
      </section>
      <section className='w-11/12 mx-auto'>
      <div className="pt-20 text-black sm:p-8 w-full sm:flex space-x-5 space-y-5  justify-between">
        <div className="md:w-1/2 space-y-5 sm:justify-around flex flex-col">
          <p>MEET TWOSWFT</p>
          <h1 className='text-5xl font-semibold'><i className="ital">Creative</i> <br /> and proficient.</h1>
        </div>
          <p className="mb-4 sm:w-6/12 text-lg">
          Twosqft employs over 100 employees, the majority of whom are based on project sites. We embrace holistic development and support for employees with the aim of being a first-choice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-black">
      {serviceIcons.map((service, index) => (
        <div key={service.name} className={`p-4 text-cente ${index < 3 ? 'border-r': ''}`}>
          <div className="flex justify-around">
          <div className="text-4xl text-blue-500 mb-4">
            <FontAwesomeIcon icon={service.icon} style={{ color: '#072326' }} />
          </div>
          <div className="rounded-full bg-white text-black shadow-md text-base w-8 h-8 flex items-center justify-center">
            <span>{index + 1}</span>
          </div>
          </div>
          <h3 className="text-lg font-semibold">{service.name}</h3>
          <p className='text-black'>{service.description}</p>
        </div>
      ))}
    </div>
      </section>
      <section style={{color: `${colr}`}} className='pt-24 w-[98%] mx-auto'>
        <div className="border md:w-11/12 lg:w-4/5 mx-auto py-3 border-b-0">
          <h1 className='text-center'>THROUGH A UNIQUE COMBINATION OF DESIGN AND ENGINEERING.</h1>
        </div>
          <div className="md:w-11/12 lg:w-4/5 mx-auto border">
            <div className="corsule w-full sm:p-10">
             <div 
             ref={ref}
             className="corsule-wrapper p-2 flex w-full">
             <motion.div
               initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
               animate={{
                 clipPath: isInView
                   ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                   : 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
               }}
               transition={{ duration: 1 }}      
             className="wrapper w-1/2">
              <img src="https://www.twosqft.com/wp-content/uploads/2023/06/2.jpeg" alt="" />
              </motion.div>
             <motion.div 
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              animate={{
                clipPath: isInView
                  ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                  : 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
              }}   
             transition={{ duration: 1 }} // Adjust the animation duration as needed       
             className="wrapper w-1/2 text-white">
             <img src="https://www.twosqft.com/wp-content/uploads/2023/06/r1-1.png" alt="" />
             </motion.div>
             </div>
              <div className="sm:flex md:flex-col lg:flex-row pt-12 sm:px-5">
                <div className="text-white flex flex-col  space-y-5 md:w-full text-start sm:w-1/2">
                <p className="text-4xl ital">
                    Functional
                  </p>
                  <h1 className="text-5xl ">
                  & User-Friendly <br /> Design.
                  </h1>
                  <p className='w-3/5'>Experience the perfect fusion of style and usability with our design approach, creating spaces that are both functional and user-friendly.</p>
                  <div className="w-6/5 flex justify-start">
                <button className="text-start bg-white text-lg text-black p-5">GET Quotation For Your Project</button>

                  </div>
                </div>
                 <div className="sm:mx-auto mx-8 pt-10 sm:flex sm:w-4/5 justify-around">
                 <div>
                <ul className='flex flex-col space-y-2 sm:py-0 py-4 text-sm font-semibold list-disc text-gray-400'>
                  <li>Structural Design</li>
                  <li>Architectural Design</li>
                  <li>City Planning</li>
                  <li>Interior Design</li>
                  <li>Urban Design</li>
                </ul>
              </div>
              <div>
                <ul className='flex flex-col space-y-2 text-sm font-semibold list-disc text-gray-400'>
                  <li>Landscape Architecture</li>
                  <li>Renovation</li>
                  <li>Site Planning</li>
                  <li>Project Analysis</li>
                  <li>Construction Plan</li>
                </ul>
              </div>
                 </div>
                </div>            
             </div>
          </div>
         <section className='md:w-[85%] mx-auto'>
         <div className={`land-offer pt-10`}>
            <div  className="sm:flex-row flex flex-col border border-black">
              <div 
                ref={landRef}
                className={`sm:w-2/5 text-[${colr}]`}>
                <div className="">
                  <p
                  className="p-3 px-5 border border-black border-t-0 border-l-0">2.</p>
                </div>
                <motion.div
                initial={{x:-50, opacity:0}}
                animate={{x:isLandViwed ? 0 : -50, opacity:isLandViwed ? 1 : 0}}
                transition={{duration:1}}
               className="p-10 h-[91.5%] space-y-5 border-r-[1px] border-black">
                  <h1 className="text-6xl ital">Do you have</h1>
                  <h1 className="text-2xl font-bold">a piece of Land</h1>
                  <p>Unlock and maximise the value of your property through a collaborative conversion project with our trusted real-estate builder wing, unlocking mutual success and profitability.</p>
                  <div className="flex justify-center">
                    <button className="p-5 rounded w-60 text-white bg-gray-500">Plan Your Project Today</button>
                  </div>
                </motion.div>
              </div>
              <div className="sm:w-3/5">
                <motion.img 
                initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
                animate={{ clipPath:isLandViwed?  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
                transition={{duration:1 }}
                className='p-5 mt-5' src="https://www.twosqft.com/wp-content/uploads/2022/03/img-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div  className="sm:flex justify-between pt-20">
            <h1 className='text-5xl sm:pt-5 sm:pb-0 pb-4 pr-4 sm:mb-0 mb-10 text-ce lg:bg-inherit bg-inherit  relative z-20'>Process</h1>
            <div  className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-5/6 ">
            <ContentSquare
                border='border'
                center='center'
                number="01"
                title="Program"
                description="Gain a competitive edge in the real estate market with our game-changing project program, revolutionizing how projects are conceived and executed."
            />
            <ContentSquare
                border='border'
                center='center'
                number="02"
                title="Concept"
                description="Redefine possibilities and bring your vision to life as we conceptualize your project with our cutting-edge design skills, setting the stage for a remarkable real estate masterpiece."
            />
            <ContentSquare
                border='border'
                center='center'
                number="03"
                title="Design"
                description="Unlock the potential of your real estate project through the ingenuity of our skilled designers and engineers, who blend creativity and technical expertise to shape remarkable designs."
            />
            <ContentSquare
                border='border'
                center='center'
                number="04"
                title="Build"
                description="Experience the art of construction precision with our seasoned civil engineers and construction managers, who bring expertise and meticulousness to every aspect of your real estate project."
            />
             </div>
          </div>
          <div 
          ref={last}
          className= "lg:h-[40rem] mt-10 lg:flex justify-center border border-black">
            <div className="p-5 flex justify-center border border-black border-t-0 border-l-0">
              <motion.img 
               initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
               animate={{ clipPath:isLastView?  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
               transition={{duration:1 }}
               className='h-full'
              src="https://www.twosqft.com/wp-content/uploads/2022/03/Img.jpg" alt="" />
            </div>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:isLastView ? 1 : 0}}
            transition={{duration: 1.2}}
            className='lg:w-1/2'>
              <h1 className='text-center p-5 border border-black border-t-0 border-r-0 border-l-0'>3. COMMERCIAL REAL ESTATE</h1>
              <div className="content py-28 p-8 text-center">
                <h1 className="text-4xl ital">Ready to build wealth through</h1>
                <h1 className="text-2xl font-bold ital">commercial real estate investments?</h1>
                <p>Unleash a world of possibilities for your commercial property through a visionary project developed by our design and construction company, tailored to attract and serve diverse businesses in the restaurant, office, hotel, retail, or mall sectors.</p>
                <div className="flex pt-5 w-full ">
                 <button className='w-40 mx-auto bg-gray-500 p-5 text-white rounded'>learn more</button>
                </div>
              </div>
            </motion.div>
            <div className="p-5 flex justify-center border border-black border-t-0 border-r-0">
               <motion.img 
               initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
               animate={{ clipPath:isLastView?  'polygon(0 0, 100% 0, 100% 100%, 0% 100%)':'polygon(0 0, 100% 0, 100% 0%, 0% 0%)' }}
               transition={{duration:1 }}
               className='h-full'
                src="https://www.twosqft.com/wp-content/uploads/2022/03/Img-1.jpg" alt="" />
            </div>
          </div>
         </section>
      </section>
      <Footer />
      </div>
    </>
  )
}

export default transition(Home);
