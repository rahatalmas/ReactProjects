import {useContext} from 'react';
import GlobalStateProvider from '../StateProviders/StateProvider';

const ProductCard = ({title,summary,image,price}) =>{
    
    const {cartItems,setCartItems} = useContext(GlobalStateProvider);
    
    const newitem = {
        img:"",
        title:"It Ends With Us",
        price:"100 tk",
        quantity : 0
    }
    
    const AddToCart = (newitem)=>{
        //console.log(item)
        const exist = cartItems.find((item)=>item.title === newitem.title);
        exist?exist.quantity++:newitem.quantity=1;
        setCartItems(exist?[...cartItems]:[...cartItems,newitem]);
    }


    return(
        <>
            <div className="product-card">
               <img className="book-image" alt="imagename" src="./It-Starts-With-Us.webp"/>
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