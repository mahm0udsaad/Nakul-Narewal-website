import { motion ,useInView} from "framer-motion";
import { useRef } from "react";
const ContentSquare = ({ number, title, description ,border , center}) => {
  const ref = useRef(null) 
  const isInView = useInView(ref)
  return (
      <motion.div
      initial={{y:-50 , opacity: 0}}
      animate={{y:isInView?-50 :0 , opacity:isInView? 1 :0}}
      transition={{duration:.5}}
      ref={ref}
      className={`${border} border-black p-4 text-${center}`}>
        <div className="flex items-center space-x-2">
        <div className="text-4xl font-bold">{number}</div>
        <div className="text-xl font-bold">/{title}</div>
        </div>
        <p className='pt-5'>{description}</p>
      </motion.div>
    );
  };

  export {ContentSquare}