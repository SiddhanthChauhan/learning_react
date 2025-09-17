import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

//It makes a piece of state (user) and its updater (setUser) 
// available to your entire app, without passing them down through prop