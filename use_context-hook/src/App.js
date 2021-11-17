import './App.css';
import React from 'react'
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Martha"}>
        <ChannelContext.Provider value={"Codevolution"}>
        {/* Component C will be Child of Context Component */}
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
