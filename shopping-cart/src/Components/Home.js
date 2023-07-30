import { useContext } from "react";
import GlobalStateProvider from "../StateProviders/StateProvider";
import ProductCard from "../Utility/ProductCard";
const Home = () =>{
    const {books} = useContext(GlobalStateProvider);
    return(
        <>
          <section className="product-display-section">
            {
               books.map(
                  book =>(
                     <div>
                        <ProductCard 
                           title={book.title}
                           summary={book.summary}
                           image={book.img}
                           price={book.divprice}
                        />
                     </div>
                  )
               )
            }
          </section>
        </>
    );
}

export default Home;