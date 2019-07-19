import React from 'react';
import confLogo from '../images/logo-ag.png';
import './styles/ProfileStyle.css';

class ProfileBody extends React.Component{
    render(){
    return  (

        <div className='Profile__section-name'>  
        <img className='Profile__avatar' src='https://eafitrequisitos.s3.us-east-2.amazonaws.com/john.png' alt='imagen'/>  
        <h1> Kevin Daniel  Pineda </h1>
        </div>

    )
}
}

export default ProfileBody;