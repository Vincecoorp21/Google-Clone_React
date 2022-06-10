import React from 'react';
import '../Header/Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <a href='https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header'>
          Sobre Google
        </a>
        <a href='https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES'>
          Tienda
        </a>
      </div>
      <div>
        <a href='https://mail.google.com/mail/?authuser=0&ogbl'>Gmail</a>
        <a href='https://www.google.es/imghp?hl=es&authuser=0&ogbl'>Imágenes</a>
        <button class='loginButton'>Iniciar sesión</button>
      </div>
    </header>
  );
};

export default Header;
