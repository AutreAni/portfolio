function NavIcon({isOpen, toggleOpen}) {
  
    return(
        <div
         onClick = {() => {toggleOpen(!isOpen)}}
         className={`nav_icon ${isOpen? "nav_icon_open": ""}`}>
        <div className="row row1">
          <span />
          <span />
          <span />
        </div>
        <div className="row row2">
          <span />
          <span />
          <span />
        </div>
        <div className="row row3">
          <span />
          <span />
          <span />
        </div>
      </div>
    )
}

export default NavIcon;
