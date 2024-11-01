import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user =  response.user;
         await addDoc(collection(db,"user"),{
            uid :user.uid,
            name,
            authProvider : 'local',
            email
         })


    }catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout}