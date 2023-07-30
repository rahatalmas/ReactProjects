import { useContext, useEffect } from "react";
import GlobalStateProvider from "../StateProviders/StateProvider";
import ProductCard from "../Utility/ProductCard";
const Home = () =>{
    const {books,setBooks} = useContext(GlobalStateProvider);
    const title = books[0].title;
    const summary =books[0].summary ;
    const image = books[0].img;
    const price = books[0].price;
    return(
        <>
          <section className="product-display-section">
            <ProductCard 
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
            <ProductCard 
               title="It Ends With Us"
               summary={summary}
               image={image}
               price={price}
            />
            <ProductCard 
               title="Things You See ..."
               summary={summary}
               image={image}
               price={price}
            />
            <ProductCard 
               title="Atomic Habits"
               summary={summary}
               image={image}
               price={price}
            />
            <ProductCard 
               title="Psychology of Money"
               summary={summary}
               image={image}
               price={price}
            />
            <ProductCard 
               title="Dopamine Detox"
               summary={summary}
               image={image}
               price={price}
            />
          </section>
        </>
    );
}

export default Home;