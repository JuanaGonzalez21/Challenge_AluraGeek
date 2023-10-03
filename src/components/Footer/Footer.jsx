import React from 'react';
// import instagram from '../../assets/img/logo-instagram.svg'

const Footer = () => {
    return (
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Juana Gonzalez, Alura</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled ">
      <li class="ms-3"><a class="text-body-secondary" target="_blank" href="https://www.instagram.com/progamacion/"><ion-icon name="logo-instagram"></ion-icon></a></li>
      <li class="ms-3"><a class="text-body-secondary" target="_blank" href="www.linkedin.com/in/juanagonzalezardila"><ion-icon name="logo-linkedin"></ion-icon></a></li>
      <li class="ms-3"><a class="text-body-secondary" target="_blank" href="https://github.com/JuanaGonzalez21"><ion-icon name="logo-github"></ion-icon></a></li>
    </ul>
  </footer>
</div>
    );
}

export default Footer;
