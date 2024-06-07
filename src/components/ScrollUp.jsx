import { RiArrowUpLine } from "@remixicon/react";
import { useEffect, useState } from "react";

const ScrollUp = () => {
     const [isScrolled, setIsScrolled] = useState(false)
     
     useEffect(() => {
          const checkScrolleTop = () => {
               window.scrollY > 350 ? setIsScrolled(true) : setIsScrolled(false)
          }

          window.addEventListener('scroll', checkScrolleTop)

          return () => window.removeEventListener('scroll', checkScrolleTop)
     }, [])

     const getClassName = () => {
          return `scrollup ${isScrolled  ? 'show-scroll' : ''}`
     }

     return (
          <a href="#" className={getClassName()} id="scroll-up">
               <RiArrowUpLine />
          </a>
     );
}

export default ScrollUp;
