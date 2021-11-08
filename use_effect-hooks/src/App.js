import './App.css';
// import ClassCounterOne from './Components/ClassCounterOne';
// import HookCounterOne from './Components/HookCounterOne';
import ClassMouse from './Components/ClassMouse';
import HookMouse from './Components/HookMouse';

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne />
      <ClassCounterOne /> */}

      {/* Run Effects only once */}
      {/* <ClassMouse /> */}
      <HookMouse />
    </div>
  );
}

export default App;
