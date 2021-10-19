import './App.css';
import './public/css/appStyles.css'
import { Component } from 'react';
// import Greet from './Components/Greet.js'
// import Welcome from './Components/Welcome.js'
// import Message from './Components/Message.js'
// import Counter from './Components/Counter.js'
// import ParentComponent from './Components/ParentComponent.js'
// import UserGreeting from './Components/UserGreeting.js'
// import NameList from './Components/NameList.js'
// import Stylesheet from './Components/Styling/Stylesheet.js'
// import Inline from './Components/Styling/Inline.js'
// import Form from './Components/Form-Handling/Form'
// import FragmentDemo from './Components/Fragments/FragmentDemo.js'
// import ParentComp from './Components/PureComponents/ParentComp'
// import styles from './public/css/appStyles.module.css'
// import Hello from './Components/Hello.js'
// import FocusInput from './Components/Refs/FocusInput';
// import RefsDemo from './Components/Refs/RefsDemo';
// import FRInput from './Components/Refs/FRInput';
// import FRParentInput from './Components/Refs/FRParentInput';
import PortalDemo from './Components/Portals/PortalDemo';

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

        {/* <Form />
        <FragmentDemo /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo />
        <FocusInput />
        <FRInput />
        <FRParentInput /> */}

        <PortalDemo />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
