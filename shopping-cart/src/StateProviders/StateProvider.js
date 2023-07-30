import {useState,createContext} from 'react';

const GlobalStateProvider = createContext({});

export const BookContextProvider = ({children}) =>{
    const [books,setBooks] = useState([
        {
            img:"./It-Starts-With-Us.webp",
            title:"It Starts With Us",
            summary:"It Starts With Us is told from...",
            price:100
        },
        {
            img:"./27362503.jpg",
            title:"It Ends With Us",
            summary:"It Ends With Us is told from...",
            price:100
        },
        {
            img:"./9780143130727.jpeg",
            title:"Ikigai",
            summary:"japanes ...",
            price:100
        },
        {
            img:"./The-Psychology-of-Money_0000.jpg",
            title:"The Psychology of...",
            summary:"It Starts With Us is told from...",
            price:100
        },
        {
            img:"./51lJolln98L._AC_UF1000,1000_QL80_.jpg",
            title:"System Design Interview",
            summary:"It Starts With Us is told from...",
            price:100
        },
    ]);

    const [cartItems,setCartItems] = useState([
        {
            img:"./It-Starts-With-Us.webp",
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