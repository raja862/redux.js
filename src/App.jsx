import React from "react";
import { Provider } from "react-redux";
import Productpage from "./Components/Productpage";
import ProductUpdate from "./Components/ProductUpdate";
import {store} from "./Features/mockStore";
const App=()=>{

  return(
    <div>
<h1>Redux</h1>
<Provider store={store}>
<Productpage/>
<ProductUpdate/>
</Provider>
    </div>
  )
}
export default App;