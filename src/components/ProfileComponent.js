import React from 'react';
import confLogo from '../images/logo-ag.png';
import './styles/ProfileStyle.css';
import ProfileHeader from './ProfileHeaderComponent';
import ProfileBody from './ProfileBodyComponent';
import ProfileInfo from './ProfileInfoComponent';
import ProfileFooter from './ProfileFooterComponent';


class Profile extends React.Component{
    render(){
return (
    //contenedro de la card
    <div className='Profile'>

      {/*Encabezado de perfil*/}  

       <ProfileHeader/>


     {/*Nombre de usuario y avatar*/}

       <ProfileBody/>

       {/*Informacion*/}      
       
       <ProfileInfo/>

     {/*Conferencia Geek*/} 

    <ProfileFooter/>
   
    </div> //Cierra div de clase Profile
       );

    }

}

export default Profile;