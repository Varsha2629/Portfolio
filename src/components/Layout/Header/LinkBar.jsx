import "./LinkBar.scss";

const LinkBar = (props) => {

  const handleClick = () => {
    return (
      <span className="linkContainer">
      {props.linkClick 
        ?
        <div className="slide-out">
        <nav className="topnav">
          <ul className="linkButtons">
            <li onClick={(e) => {
              props.setLinkClick(false)
            }}><a className="clickOff" href="/#"><i className="fa-solid fa-angles-right"></i></a></li>
            <li><a href="mailto:varsha3051@gmail.com" ref=""><i className="fa-solid fa-square-envelope"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-github-square"></i></a></li>
            <li><a href="/"><i className="fa-brands fa-instagram-square"></i></a></li>
          </ul>
        </nav>
        </div> 
      : 
        <div className="arrowButton" onClick={(e) => {
          props.setLinkClick(true)
        }}>
          <a className="click" href="/#">
            <i className="fa-solid fa-angles-left"></i>
          </a>
        </div>
      }
      </span>
    )
  }


  return (
    handleClick()
  )
}

export default LinkBar;