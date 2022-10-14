// import DemoClass from './DemoClass'
// import "./math";
import { ThemeContext } from './index'
import { useContext } from 'react';
import './App.css';
import React, { Suspense } from 'react';
import * as math from "./math";


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
  const theme = useContext(ThemeContext);
  const header = {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center"
  }
  console.log(theme)
  console.log(math.add(1, 2))
  console.log(math.mul(5, 5))
  console.log(math.div(5, 5))
  console.log(math.si(100000, 2, 5))
  // console.log(math.div(20, 10))

  return (
    <div className="App">

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