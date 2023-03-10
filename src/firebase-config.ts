import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
//import {getFirestore} from "firebase/firestore";
//import {getStorage} from "firebase/storage";

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    //databaseURL: process.env.REACT_APP_DB,
    projectId: process.env.REACT_APP_PID,
    storageBucket: process.env.REACT_APP_SB,
    messagingSenderId: process.env.REACT_APP_SID,
    appId: process.env.REACT_APP_APPID,
    measurementId:process.env.REACT_APP_MID 
};
    
    
 const app = initializeApp(config);

 export const auth = getAuth(app)