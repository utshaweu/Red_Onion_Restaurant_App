import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


export const initializeLoginFramework = () => {
  initializeApp(firebaseConfig);
}

export const userCreateWithEmailAndPassword = (name, email, password) => {
  const auth = getAuth();
     return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          updateUserName(name);
          return newUserInfo;
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.code;
          newUserInfo.success = false;
          return newUserInfo;
        });
}

export const logInWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
          //console.log('sign in user info', res.user);
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.code;
          newUserInfo.success = false;
          return newUserInfo;
        });
}


const updateUserName = (name) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
      displayName: name, 
    })
    .then(() => {
      console.log("user name updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}