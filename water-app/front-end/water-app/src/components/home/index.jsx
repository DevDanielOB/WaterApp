import * as React from 'react';
import { Link } from 'react-router-dom';
import HomeButton  from '../home-button/index.tsx';

const HomePage = () => {
  console.log('Home Page');

  const handleClick = (e) => {
    window.location.href = '/registration'
  }
  return (
    <div>
      <h1>Wapp</h1>
      <Link to="/registration">
      <HomeButton title="Registrar" onClick={handleClick} />
      </Link>
    </div>
  );
}

export default HomePage

