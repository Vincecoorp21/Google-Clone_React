import React from 'react';
import '../Home/Home.css';
import micro from '../../../src/assets/micro.svg';
import search from '../../../src/assets/search.svg';

const Home = () => {
  return (
    <div class='google-container'>
      <img
        src='https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        alt=''
      />
      <div className='input-container'>
        <img className='search-svg' src={search} alt='' />
        <input type='text' />
        <img src={micro} alt='' className='micro' />
      </div>
      <div className='buttons-container'>
        <button>Buscar con Google</button>
        <button>Voy a tener suerte</button>
      </div>
      <div className='language-container'>
        <span>Ofrecido por Google en:</span>
        <a href=''>valencia</a>
        <a href=''>galego</a>
        <a href=''>euskara</a>
      </div>
    </div>
  );
};

export default Home;
