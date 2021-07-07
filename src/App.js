
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feeds from './Feeds';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidbar from './Sidbar';
import { login, logout, selectUser } from './userSlice';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
     if(authUser){
      
       dispatch(
         login({
           name:authUser.displayName,
           email:authUser.email,
           photo:authUser.photoURL
         })
       );
     }
     else {
       dispatch(logout());
     }
    })
  }, [dispatch])
  return (
    <div>
      {
      !user ? <Login/> : <div className="app">
      <Header/>
       <div className='flex bg-gray-200'>
         <Sidbar/>
         <Feeds/>
         <Widgets/>
       </div>
    </div>  
    }
    </div>
  );
}

export default App;
