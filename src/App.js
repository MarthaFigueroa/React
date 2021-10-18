import './App.css';
// import Greet from './Components/Greet.js'
// import Welcome from './Components/Welcome.js'
// import Message from './Components/Message.js'
// import Counter from './Components/Counter.js'
// import ParentComponent from './Components/ParentComponent.js'
// import UserGreeting from './Components/UserGreeting.js'
// import NameList from './Components/NameList.js'
// import Stylesheet from './Components/Styling/Stylesheet.js'
// import Inline from './Components/Styling/Inline.js'
import Form from './Components/Form-Handling/Form'
// import styles from './public/css/appStyles.module.css'
import './public/css/appStyles.css'
// import Hello from './Components/Hello.js'
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props!</p>
        </Greet>
        <Greet name="Diana" heroName="Wonderwoman">
          <button>Action</button>
        </Greet>
        <Greet name="Almendra" heroName="Catwoman"/>
        
        
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Diana" heroName="Wonderwoman"/>
        <Welcome name="Almendra" heroName="Catwoman"/> */}

        {/* <Message />
        <Counter /> */}

        {/* <ParentComponent />
        <UserGreeting /> */}
        {/* <NameList /> */}

        {/* <Stylesheet primary={false}/>    */}
        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>success</h1>
        <Inline />     */}

        <Form />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
