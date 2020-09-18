import React  from "react";
import Profile from "./profile"
import "./App.css"


class App extends React.Component {
  state = {
    fullName: "Rami ben salem",
    bio: "student in Go My Code",
    imgSrc: "./profilphoto.jpg",
    profession: "Front-End developer",
    show : false,
    time : new Date()
  };

  handleClick=(e)=>{
      this.setState({
        show: true
      });
    
    console.log(this.state.show)

  }
  render() {
    const {show} = this.state
    
    return (
      <div className="App">
        
        <button type="button" className="btn btn-outline-success" onClick={this.handleClick} value={show} >Click me</button>
    {show === true ? <Profile state={this.state} /> : "" }        
        
      </div>
    );
    
  }
  
}

export default App;
