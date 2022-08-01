import { useState } from "react";
import { createContext, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/Firebase.utils";
//first we need to create a contet .
//as the actual value we want to access
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

//every context has .provider is is component that will wrap around any other component  then we access values inside
//provider is going to recive the the value which will hold actual contextual value.here current useer and set is value
//this provider is allowing any of its child component to access the value inside use state
//i want to be able to call the set and get the value anywher in component tree nested provider
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    //it will unsubscribe whenever it unmount
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      //whenever the authState changes log the user
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
