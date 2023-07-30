import {useContext} from 'react';
import GlobalStateProvider from '../StateProviders/StateProvider';

const ProductCard = ({title,summary,image,price}) =>{
    
    const {cartItems,setCartItems} = useContext(GlobalStateProvider);
    
    const item = {
        title:"It Ends With Us",
        price:"100 tk",
        quantity : 0
    }
    
    const AddToCart = (item)=>{
        console.log(item)
        setCartItems([...cartItems,item])
        console.log(cartItems)
    }


    return(
        <>
            <div className="product-card">
               <img className="book-image" alt="imagename" src="./It-Starts-With-Us.webp"/>
               <div className="books-info">
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <p>Price: {price} tk</p>
                  <button onClick={()=>{AddToCart(item)}}>Add</button>
               </div>
            </div>
        </>
    );
}

export default ProductCard;