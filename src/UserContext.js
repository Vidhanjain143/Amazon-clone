import React, { createContext, useState, useEffect } from "react";
import {auth} from './firebase'

// Create a new context object for the user
export const UserContext = createContext({ user: null });

// Create a provider component that wraps the entire app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Use the Firebase Auth API to check if the user is already signed in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};