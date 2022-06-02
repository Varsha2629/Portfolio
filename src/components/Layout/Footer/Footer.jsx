import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">
        <p>&copy; 2♥22 Varsha Panchal. All Rights Reserved.</p>
        <div className="arrow-up">
          {" "}
          <a href="#top">
            {" "}
            <img src="/img/svg/caret-circle-up.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
