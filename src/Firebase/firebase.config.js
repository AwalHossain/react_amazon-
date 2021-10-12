import {initializeApp} from 'firebase/app'
import firebaseConfig from './firebase.init'


const intialAuthentication = ()=>{
    initializeApp(firebaseConfig)
}

export default intialAuthentication;