import { createContext, useCallback, useMemo, useState, useEffect, useContext } from 'react'
import {  onAuthStateChanged,  signInWithEmailAndPassword, signOut,  sendPasswordResetEmail, sendEmailVerification,  } from 'firebase/auth'
import firebase from 'firebase/app';
import 'firebase/auth';
//import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";


type Auth = firebase.auth.Auth;
type User = firebase.User;

interface IAuthContext {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  verifyEmail: () => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth() is used with <AuthContext.Provider>');
  }
  return context;
};

interface IAuthContextProviderProps {
  children: React.ReactNode;
}

export default function AuthContextProvider(props: IAuthContextProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = useCallback((email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }, []);

  const logout = useCallback(() => {
    return signOut(auth);
  }, []);

  const verifyEmail = useCallback(() => {
    return sendEmailVerification(auth.currentUser!);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User) => {
      if (currentUser) {
        setCurrentUser(currentUser);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = useMemo(() => ({
    currentUser,
    login,
    logout,
    verifyEmail,
  }), [currentUser, login, logout, verifyEmail]);

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}