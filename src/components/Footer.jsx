import { RiFacebookBoxLine, RiInstagramLine, RiTwitterLine } from '@remixicon/react';

const Footer = ({ nameTitle, lastnameTitle, education, copyright }) => {
     return (
          <footer className='footer'>
               <div className='footer__container container grid'>
                    <div>
                         <h1 className='footer__title'>
                              {nameTitle}<span>{lastnameTitle}</span>
                         </h1>

                         <h2 className='footer__education'>
                              {education}
                         </h2>
                    </div>

                    <div className='footer__social'>
                         <a href='#' target='_blank' className='footer__social-link'>
                              <RiInstagramLine />
                         </a>
                         <a href='#' target='_blank' className='footer__social-link'>
                              <RiFacebookBoxLine />
                         </a>
                         <a href='#' target='_blank' className='footer__social-link'>
                              <RiTwitterLine />
                         </a>
                    </div>

                    <span className="footer__copy">
                         &#169; {copyright}
                    </span>
               </div>
          </footer>
     );
}

export default Footer;
