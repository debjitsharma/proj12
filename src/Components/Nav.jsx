import React from "react";
function Nav()
{return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
    <h3 style={{color:"#5da9e9ff",font:"italic bold 30px Cursive"}}>Animos</h3>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#" style={{font:"bold 15px"}}>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Shows</a>
      </li>
      <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle bg-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Genre
        </a>
        <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item bg-dark" href="#" style={{color:"white"}}>Slice Of Life</a></li>
          <li><a class="dropdown-item bg-dark" href="#"style={{color:"white"}}>Romance</a></li>
          <li><a class="dropdown-item bg-dark" href="#"style={{color:"white"}}>Action</a></li> <li><a class="dropdown-item bg-dark" href="#"style={{color:"white"}}>Science
            Fiction</a>
      </li>

</ul></li>
    </ul></div>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search Anime" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form></div>
</nav>);

}
export default Nav;