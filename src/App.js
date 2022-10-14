// import DemoClass from './DemoClass'
// import "./math";
import { ThemeContext } from './index'
import { useContext } from 'react';
import './App.css';
import React, { Suspense } from 'react';
import * as math from "./math";
const ThemeContext1 = React.createContext();
const value1 = {
  color: "blue",
  name: "Ashish Patel",
  totalCartItem: 100,
  totalAmount: 150000
}

const Demo = React.lazy(() => import('./DemoClass'))



function App() {

  // console.log(add(2, 2))
  // console.log(subs(2, 2))
  // console.log(mul(2, 2))
  // console.log(div(2, 2))

  // import("./math").then(math => {
  //   import("./math").then(math => {
  //     console.log(math.add(16, 26));
  //   });
  // });
  const Check = () => {
    const theme1 = useContext(ThemeContext1);
    return (
      <div style={header}>
        <span>Name :{theme1.name}</span>
        <span>Total Items : {theme1.totalCartItem}</span>
        <span>Total Amount :{theme1.totalAmount}</span>
      </div>
    )
  }
  const theme = useContext(ThemeContext);
  const header = {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
  }
  console.log(theme)
  console.log(math.add(1, 2))
  console.log(math.mul(5, 5))
  console.log(math.div(5, 5))
  console.log(math.si(100000, 2, 5))

  return (


    <div className="App">
      <ThemeContext1.Provider value={value1}>
        <Check />
      </ThemeContext1.Provider>


      <div style={header}>
        <span>Name :{theme.name}</span>
        <span>Total Items : {theme.totalCartItem}</span>
        <span>Total Amount :{theme.totalAmount}</span>
      </div>
      <Suspense fallback={<div style={{ color: theme.color }}>Loading...</div>} >
        <section>
          <Demo />
        </section>
      </Suspense>
    </div>
  );
}

export default App;