import {useState,createContext} from 'react';

const GlobalStateProvider = createContext({});

export const BookContextProvider = ({children}) =>{
    const [books,setBooks] = useState([
        {
            img:"",
            title:"It Starts With Us",
            summary:"It Starts With Us is told from...",
            price:100
        }
    ]);

    const [cartItems,setCartItems] = useState([
        {
            img:"",
            title:"It Starts With Us",
            price:100,
            quantity:1
        }
    ]);
    return(
        <GlobalStateProvider.Provider value={{books,setBooks,cartItems,setCartItems}} children>
               {children}
        </GlobalStateProvider.Provider>
    );
}

export default GlobalStateProvider;