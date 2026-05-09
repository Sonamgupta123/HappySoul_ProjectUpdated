<<<<<<< HEAD
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function Logout(){
    const navigate=useNavigate();
  useEffect(()=>{
    localStorage.clear();
    navigate('/login');
  });
    return(
        <>
        </>
    )
}
=======
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function Logout(){
    const navigate=useNavigate();
  useEffect(()=>{
    localStorage.clear();
    navigate('/login');
  });
    return(
        <>
        </>
    )
}
>>>>>>> dddd640725d6965bfe90ae355c0707a5a58cdc01
export default Logout;