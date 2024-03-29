import {FullScreenVideo} from '../components/video'
import '../App.css'
import { motion } from 'framer-motion';
import { useEffect, useState , useRef} from 'react';
import { ContentSquare } from '../components/content';
import { Parallax } from 'react-scroll-parallax';
import { PageFooter } from '../components/footer';
import transition from '../utiles/transition';

const imageUrls = [
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c1.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c3.jpg',
    'https://architecturehub.liquid-themes.com/elementor/wp-content/uploads/2021/08/Placeholder-2@2x1-1.jpg',
    'https://staging.liquid-themes.com/arc-interiordesign2/wp-content/uploads/2022/04/c2.jpg',
  ];
  const data = [
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/two_team1.jpg',
      percentage: '95%',
      description: 'Client Satisfaction - Positive feedback, repeat business, and referrals indicate our ability to meet and exceed client expectations.',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/twoput1.jpg',
      percentage: '50+',
      description: 'Projects - Successfully completing projects within the specified time frame and allocated budget showcases our efficiency, project management skills, and ability to handle complex tasks.',
    },
    {
      imageUrl: 'https://www.twosqft.com/wp-content/uploads/2023/06/acq.jpg',
      percentage: '5LAKH+',
      description: 'SQFT design delivered with craftsmanship, attention to detail, adherence to industry standards, and the overall durability and functionality of our projects, establishing our reputation and credibility in the market.',
    },
  ];
  const Card = ({ data }) => {
    return (
      <div className="p-4 md:w-[30%] sm:w-[35%]">
        <img src={data.imageUrl} alt="Project" className="w-full" />
        <div className="text-center mt-4">
          <p className="lg:text-7xl text-4xl my-10 font-bold">{data.percentage}</p>
          <p className="text-gray-600 text-start">{data.description}</p>
        </div>
      </div>
    );
  };
  
const About =()=>{
    const [x, setX] = useState(0);
    const [repeat, setRepeat] = useState(false);
    const imageContainer = useRef(null);
  
    useEffect(() => {
      if (x === 2500) {
        setX(0);
      }
  
      const intervalId = setInterval(() => {
        setX((prevX) => prevX + 1);
        imageContainer.current.scrollLeft = x; 
      }, 20);
  
      return () => clearInterval(intervalId);
    }, [x]);
return (
     <section className='space-y-5 pt-40 overflow-x-hidden'>
        <div className="title w-11/12 mx-auto mb-10 ">
            <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">ABOUT US</span>
            <br />
            <i className="text-5xl font-semibold ital ">Design, Construct, Transcend</i>
            <h1 className="text-5xl bold">beyond square footage</h1>
        </div>
        <FullScreenVideo />
        <div className="w-11/12 lg:w-[85%] mx-auto">
            <div className="w-full pt-8 flex justify-between border-b-[1px] border-black">
                <p>ABOUt US</p>
                <p>01</p>
            </div>
           
            <div className=" lg:flex justify-between pt-28 pb-20">
             <div className="first lg:w-[40%]">
             <div className="w-full ">
             <span className="mt-5 rounded-full p-1 text-sm px-3 bg-black text-white font-semibold"> WHAT DO WE OFFER ?</span>
             </div>
            <h1 className="text-xl sm:text-4xl pb-5 pt-4">We offer comprehensive design and build solutions, providing end-to-end services for all your project needs.</h1>
             <ul className="flex space-x-2">
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
                <li>★</li>
             </ul>
             </div>
             <div className="sm:flex justify-around w-full lg:w-[60%]">
             <div className="midd text-xl md:w-1/2 my-5 sm:text-xl font-semibold">
                <ul className='leading-9 lg:pl-8'>
                    <li>Architectural Design</li>
                    <li>MEP Design</li>
                    <li>Interior Design</li>
                    <li>Fit-out / Furniture</li>
                    <li>Construction</li>
                    <li></li>
                </ul>
             </div>
             <div className="last md:w-1/2 lg:w-[30%]">
                <p>Experience the ultimate convenience and expertise with our full-service design and build company. Our dedicated team takes charge of every aspect of your project, ensuring a seamless journey from start to finish. From the initial conceptualization to the final completion, we handle it all, allowing you to embrace a stress-free experience. With our meticulous oversight, your vision transforms into reality, delivering exceptional results at every step.</p>
             </div>
             </div>
            </div>
            <div 
            ref={imageContainer}
            className="image-container mt-10 w-full flex space-x-12 overflow-x-hidden">
            {imageUrls.map((url, index) => (
                <img
                key={index}
                src={url}
                className={index % 2 !== 0 ? 'w-60 sm:w-[20rem]' : 'w-40 sm:w-[20rem] mt-10 sm:h-[20rem]'}
                />
            ))}
            </div>
            <div className="sm:flex pt-20">
            <h1 className='text-5xl mx-20 pt-5 sm:mb-0 mb-10 text-ce'>Process</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <ContentSquare
                number="01"
                title="Program"
                description="We completely comprehend your needs and requirements with which we tailor the project’s program"
            />
            <ContentSquare
                number="02"
                title="Concept"
                description="Through a unique combination of engineering, construction, design disciplines and expertise we come up with the best solution for you"
            />
            <ContentSquare
                number="03"
                title="Design"
                description="Build a solid foundation for your construction project's success through comprehensive budgeting and meticulous planning."
            />
            <ContentSquare
                number="04"
                title="Build"
                description="Harness the power of strategic management and impeccable execution to realise your project's vision."
            />
             </div>
          </div>
        </div>
        <div className="w-full lg:w-5/6 mx-auto hidden sm:flex justify-between py-24 overflow-hidden">
            <div className="w-[60%] lg:w-[55%] relative">
                <Parallax
                translateY={['-20%', '20%']}
                speed={-5}
                className='absolute w-60 left-[32%] top-20 z-20'
                >
                    <img className=' h-full' src="https://www.twosqft.com/wp-content/uploads/2023/06/ab2.jpg" alt="" />
                </Parallax>
                <Parallax
                translateY={['-30%', '50%']}
                className='absolute w-56 h-80 right-0'
                >
                    <img className='h-full' src="https://www.twosqft.com/wp-content/uploads/2023/06/ab3.jpg" alt="" />
                </Parallax>
                <Parallax
                translateY={['30%', '-30%']}
                speed={-8}
                className='absolute w-60 h-80'
                >
                    <img className='h-full' src="https://www.twosqft.com/wp-content/uploads/2023/06/about1.jpg" alt="" />
                </Parallax>
            </div>
            <div className="w-2/5 p-5">
                <span style={{color:'#ac8c66'}}>MEET TWOSOFT</span><br />
                <i className="text-4xl">Brilliant</i>
                <h1 className="text-4xl font-bold pb-8">
                    and detail-oriented .
                </h1>
                <p>
                    
Indulge in the brilliance of our design and engineering team, where innovation and expertise converge to create remarkable solutions. With boundless creativity and technical mastery, we redefine possibilities, pushing the boundaries of what's imaginable. Every project is an opportunity to showcase our unwavering commitment to excellence, delivering awe-inspiring designs that captivate, inspire, and leave a lasting impact. Trust our team to bring your vision to life with unrivaled passion and precision.
                </p>
            </div>
        </div>
        <div className="h-[50vh] overflow-auto panner">
        <div className="w-full">
        </div>
        </div>
        <div className="w-[98%] mx-auto">
        <div className="w-full flex justify-between border-b-2 border-black">
                <p>ABOUt US</p>
                <p>01</p>
         </div>
        <div className="sm:flex space-x-5 ">
            {data.map((el,index) => <Card key={index} data={el} />)}
        </div>
        </div>
        <PageFooter />
    </section>
)
}
export default About ;