const ProductCard = () =>{
    return(
        <>
            <div className="product-card">
               <img className="book-image" alt="imagename" src="./It-Starts-With-Us.webp"/>
               <div className="books-info">
                  <h3>Title</h3>
                  <p>details...</p>
                  <button>Add</button>
               </div>
            </div>
        </>
    );
}

export default ProductCard;