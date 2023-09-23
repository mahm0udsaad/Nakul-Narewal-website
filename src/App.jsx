import { useState ,useEffect, useRef} from 'react'
import './App.css'
import Navbar from './components/navbar'
import {Routes , Route, useLocation} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import Discourses from './pages/discourses'
import Contact from './pages/contact'
import Services from './pages/services'
import ProjectDetails from './pages/projectPage'
import { AnimatePresence } from 'framer-motion'

const ContentSquare = ({ number, title, description }) => {
  return (
    <div className="border border-black p-4 text-center">
      <div className="flex items-center space-x-2">
      <div className="text-4xl font-bold">{number}</div>
      <div className="text-xl font-bold">/{title}</div>
      </div>
      <p className='pt-5'>{description}</p>
    </div>
  );
};

function App() {
  const [isCollabOpen, setIsCollapOpen] = useState(false);
  const [bg,setBg] = useState(``)
  const [hideNav,setHideNav] = useState('')
  const [color,setColor] = useState(``)
  const location = useLocation()
  const listenScrollEvent = () => {
    const scrollY = window.scrollY;
    
     if(scrollY > 6000){
      setBg('#d7dedc');
      setColor('black');
    }else if (scrollY > 4900) {
      setBg('#072326');
      setColor('white');
    } else if (scrollY > 4000 ){
      setBg('#32484b')
      setColor('black')
    }else if (scrollY > 2300){
      console.log(scrollY);
      setBg('rgb(218 218 218)')
      setColor('black')
    }else if (scrollY > 1900) {
      setBg('rgb(142, 142, 142)');
      setColor('black');
    } else {
      setBg('rgb(28 28 28)');
      setColor('white');
    }
  };
  useEffect(() => {
    if (location.pathname === '/') {
      setBg('rgb(28 28 28)');
      setColor('white');
      window.addEventListener('scroll', listenScrollEvent);
      return () => {
        window.removeEventListener('scroll', listenScrollEvent);
      };
    }else{
      setBg('white')
      setColor('black');
    }

    window.scroll(0,0)
  }, [location.pathname]);

 useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      clearTimeout(scrollTimer);

      scrollTimer = setTimeout(() => {
        setHideNav(''); 
      }, 200);
      
      setHideNav(true); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (  
    <>
      <div className="App transtion duration-300 ease-out overflow-x-hidden" style={{backgroundColor:bg}} >
       <Navbar color={color} hide={hideNav} isCollabOpen={isCollabOpen} setIsCollapOpen={setIsCollapOpen}/>
       <div className='overflow-hidden' onClick={()=>setIsCollapOpen(false)}>
       <AnimatePresence mode='wait'>
          <Routes location={location} >
          <Route index  path='/*' element={<Home bg={bg} colr={color} setIsCollapOpen={setIsCollapOpen} />} />
          <Route path='/about' element={<About />} />
          <Route path='/discourses' element={<Discourses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/works' element={<Works />} />
          <Route path='/works/:id' element={<ProjectDetails />} />
        </Routes>
        </AnimatePresence>
       </div>
      </div>
    </>
  )
}

export default App
