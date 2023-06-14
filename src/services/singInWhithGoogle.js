import * as AuthSession from 'expo-auth-session';
import React from 'react';
import {CLINET_ID_GOOGLE, REDIRECT_URI} from '@env'





export default async function singInWhithGoogle(){

    
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLINET_ID_GOOGLE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
  
    const {type, params} = await AuthSession.startAsync({ authUrl });
    
    
    const response = [
      {
        type: type,
        token: params.access_token,
      },
    ];

    return(response)
    
  }
  