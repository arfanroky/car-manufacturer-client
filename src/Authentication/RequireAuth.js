import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks'
import auth from '../firebase.init';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
   if(!user){
       return <Navigate to='/'/>
   }
};

export default RequireAuth;