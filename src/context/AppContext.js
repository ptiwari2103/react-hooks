import { createContext } from 'react';

export const AppContext = createContext();

const ContextProvider = (props) => {
    // const phone = "+91 7042387201"
    // return (
    //     <AppContext.Provider value={phone}>
    //         {props.children}
    //     </AppContext.Provider>
    // )

    const name = "Pramod Kumar Tiwari"
    const phone = "+91 7042387201"
    
    return (
        <AppContext.Provider value={{name,phone}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;


