import React from 'react';
import './App.css';

import init from 'wasm-module';
import wasmData from 'wasm-module/wasm_module_bg.wasm';

const wasmPromise = init(wasmData);

function App() {
  wasmPromise.then((wasm) => {
    wasm.greet();
  });
  return <div className="App"> </div>;
}

export default App;
