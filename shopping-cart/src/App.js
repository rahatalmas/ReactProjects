import './App.css';
import Home from './Components/Home';
import { useContext } from 'react';
import GlobalStateProvider from './StateProviders/StateProvider';
function App() {
  const {cartItems} = useContext(GlobalStateProvider);

  return (
    <>
       <div className="App">
         <h1 >Hello world</h1>
         <h2>Items In Cart: {cartItems.length}</h2>
         <h3>Total Price: {cartItems[0].price}</h3>
         <br/>
         <h1>Books *-*</h1>
         <Home/>
       </div>
    </>
  );
}

export default App;
