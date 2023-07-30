import {useContext} from 'react';
import GlobalStateProvider from '../StateProviders/StateProvider';

const ProductCard = ({title,summary,image,price}) =>{
    
    const {cartItems,setCartItems} = useContext(GlobalStateProvider);
    
    const AddToCart = (newitem)=>{
        //console.log(item)
        const exist = cartItems.find((item)=>item.title === newitem.title);
        exist?exist.quantity++:newitem.quantity=1;
        setCartItems(exist?[...cartItems]:[...cartItems,newitem]);
        console.log(image);
    }

    return(
        <>
            <div className="product-card">
               <img className="book-image" alt="imagename" src={image}/>
               <div className="books-info">
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <p>Price: {price} tk</p>
                  <button onClick={()=>{AddToCart({image,title,price})}}>Add</button>
               </div>
            </div>
        </>
    );
}

export default ProductCard;