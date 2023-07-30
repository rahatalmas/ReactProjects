import { useContext, useEffect } from "react";
import GlobalStateProvider from "../StateProviders/StateProvider";
import ProductCard from "../Utility/ProductCard";
const Home = () =>{
    const {books,setBooks} = useContext(GlobalStateProvider);
    const title = books[0].title;
    const summary =books[0].summary ;
    const image = books[0].img;
    const price = books[0].price;
    useEffect(
      ()=>{
        console.log(books);
      },[]
    );
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
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
                        <ProductCard 
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
                        <ProductCard 
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
                        <ProductCard 
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
                        <ProductCard 
               title={title}
               summary={summary}
               image={image}
               price={price}
            />
          </section>
        </>
    );
}

export default Home;