import React, { Component } from 'react';

//function App() {
// return <input type="text" onClick={() => {console.log("I am clicked!")}} />;
//}

class App extends Component {
    render() {
        return (
          <React.Fragment>
            <label htmlFor="bar">bar</label>
            <input type="text" onClick={() => {console.log("I am clicked")}} />
          </React.Fragment>
        )
    }
}

export default App;
