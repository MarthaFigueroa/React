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
// import PortalDemo from './Components/Portals/PortalDemo';
// import Hero from './Components/Error-Boundary/Hero';
// import ErrorBoundary from './Components/Error-Boundary/ErrorBoundary';
import ClickCounter from './Components/Higher-Order-Components/ClickCounter';
import HoverCounter from './Components/Higher-Order-Components/HoverCounter';
// import ClickCounterTwo from './Components/Render-Props/ClickCounterTwo';
// import HoverCounterTwo from './Components/Render-Props/HoverCounterTwo';
// import User from './Components/Render-Props/User';
import Counter from './Components/Render-Props/Counter';
import HoverCounterTwo from './Components/Render-Props/HoverCounterTwo';
import ClickCounterTwo from './Components/Render-Props/ClickCounterTwo';

class App extends Component {

  // state = {showModal: false}
  // handleShowMessageClick = () => this.setState({showModal: true})
  // handleCloseModal = () => this.setState({showModal: false})

  render(){
    return (
      <div className="App">

        <>

          {/* <div style={{ maxWidth: 400, position: 'relative'}}
          >
            <h1>My App</h1>
            <p>
              This is an example of how you might use React.createPortal. I think
              it is a pretty neat API that is yet another awesome escape hatch
              that React provides for practical reasons. Sometimes you just need
              to render something completely outside the React Tree.
            </p>
            <button onClick={this.handleShowMessageClick}>
              Show Secret Modal
            </button>
            {this.state.showModal ? (
              <Modal onClose={this.handleCloseModal}>
                This is the secret modal message!
              </Modal>
            ) : null}
          </div> */}

          {/* <Hello /> */}
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

          {/* <PortalDemo /> */}
          
          {/* <ErrorBoundary>
            <Hero heroName="Batman" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Superman" />
          </ErrorBoundary>
          <ErrorBoundary>
            <Hero heroName="Joker" />
          </ErrorBoundary> */}
          
          {/* <ClickCounter name="Martha"/>
          <HoverCounter />

          <ClickCounterTwo />
          <HoverCounterTwo />

          <User render={ (isLoggedIn) => isLoggedIn ? "Martha" : "Guest"}/> */}
        </>



          <Counter render={ (count, incrementCount) => (
            // <ClickCounter count={count} incrementCount={incrementCount} />
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}/>
          <Counter render={ (count, incrementCount) => (
            // <ClickCounter count={count} incrementCount={incrementCount} />
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}/>
      </div>
    );
  }
}

export default App;
