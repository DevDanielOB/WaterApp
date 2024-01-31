import * as React from 'react';
import HomeButton  from '../home-button/index.tsx';
import { Link } from 'react-router-dom';

const Registration = () => {
  const handleClick = (e) => {
    window.location.href = '/'
  }
  return (
    <div>
      <h1>Fazer o seu registro</h1>
      <Link to="/">
      <HomeButton title="Registrar" onClick={handleClick} />
      </Link>
    </div>
  );
}

export default Registration

