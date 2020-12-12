import React from 'react'


const menu = [
    {
        name: "",
        icon: "/assets/icons/vr.png"
    },
    {
        name: "",
        icon: "/assets/icons/gaming.png"
    },{
        name: "",
        icon: "/assets/icons/weight.png"
    },{
        name: "",
        icon: "/assets/icons/"
    }
]

const NavBar = () => {

    return (<div>

<nav className="navbar navbar-expand-lg navbar-light py-0" >
  <a className="navbar-brand" href="#">
      <img  src="/assets/logo.jpeg" height="70px" />
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav ml-auto">

        <li>Home</li>
     
    </ul>
  </div>
</nav>

    </div>)
}


export default NavBar;
