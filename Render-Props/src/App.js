import logo from './logo.svg';
import './App.css';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* RENDER PROPS */}

      <ClickCounterTwo />
      <HoverCounterTwo />

      <User render={ (isLoggedIn) => isLoggedIn ? "Martha" : "Guest"}/>
      <Counter render={ (count, incrementCount) => (
        // <ClickCounter count={count} incrementCount={incrementCount} />
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}/>
      <Counter render={ (count, incrementCount) => (
        // <ClickCounter count={count} incrementCount={incrementCount} />
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}/>

      <User render={ (isLoggedIn) => isLoggedIn? "Martha":"Guest"} />
    </div>
  );
}

export default App;
