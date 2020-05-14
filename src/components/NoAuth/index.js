import React from 'react';

import './styles.css';

function NoAuth() {
  return(
    <div className='card-auth row'>
      <div className='col s12 m8 push-m2 l6 push-l3'>
        <div className='card'>
          <div className='card-content'>
            <span className='card-title'>
              Si tienes una cuenta Google accede directo desde el menú!
            </span>
          </div>
          <div className='card-action'>
            <a 
              href='https://accounts.google.com/SignUpWithoutGmail?hl=es' 
              target='_blank'
              rel='noopener noreferrer'>
              Registra una cuenta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoAuth;