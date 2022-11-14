import {useEffect, useState} from 'react';
import "./Footer.scss";

const Footer = () => {
  
    const [isVisable, setIsVisible] = useState(false)
    
    const toggleVisibility = () => {
      if(window.pageXOffset < 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const scrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
        
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      }
    }, [])
  

  
  return (
    <div className="footer">
      <div className="footer-text">
        <p>&copy; 2♥22 Varsha Panchal. All Rights Reserved.</p>
        <div className="arrow-up">          
          <div onClick={scrollTop}>
            <img src="/img/svg/caret-circle-up.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
