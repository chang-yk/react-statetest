import React from 'react';

class App extends React.Component{
  

  state = {
    isLoading : true
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading : false})
    },6000)
  }
  render(){
    const {isLoading} = this.state
    return <div>{isLoading ? "Loading..." : "We are ready"} </div>

  }
}




  /* cycle 
  constructor(props){
    super(props)
    console.log("hello")
  }
  state = {
    count : 1
  }
  add = () =>{
    this.setState(current => ({ count : current.count + 1}));
  }
  minus = () =>{
    this.setState({count : -1});
  }
  componentDidMount(){
    console.log("Component redered")
  }
  render(){
    return(
      <div>
        <h1>Im a class Component : {this.state.count}</h1>
        <button onClick={this.add}> Add</button>
        <button onClick={this.minus}> minus</button>
      </div>
    ) 
  }
}
*/
export default App;
