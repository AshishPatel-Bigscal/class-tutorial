// import DemoClass from './DemoClass'
// import "./math";
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

  console.log(math.add(1, 2))
  // console.log(math.div(20, 10))


  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>} >
        <section>
          <Demo />
        </section>

      </Suspense>
    </div>
  );
}

export default App;