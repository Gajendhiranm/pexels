import React from "react";
import { BrowserRouter, Route  , Switch} from 'react-router-dom';
import './App.css';
import Banner from "./Components/Banner";
import Home from "./Components/Home"
import Id from './Components/Id';

class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
         data:[],
         targetValue:{},
         input:"",
    }
    this.setId = this.setId.bind(this);
    this.search = this.search.bind(this);


}
search(e){
  console.log(e.target.value);
  this.setState({
    input:e.target.value,
  },
  ()=>{
    if(this.state.input.length >= 2){

      fetch(`https://api.pexels.com/v1/search?query=${this.state.input}&per_page=20`,{
          headers: {
            Authorization: '563492ad6f91700001000001f5ff14c533384f28a4f4c0c604aa6b63'
          }})
          .then(response => response.json())
          .then(result => this.setState({data:result.photos}))
          .catch(err => console.log(err))
    } 
    }
  
  )
}



  componentDidMount() {
    fetch("https://api.pexels.com/v1/search?query=popular&per_page=20", {
        headers: {
          Authorization: '563492ad6f91700001000001f5ff14c533384f28a4f4c0c604aa6b63'
        }})
        .then(response => response.json())
        .then(result => this.setState({data:result.photos}))
        .catch(err => console.log(err))

  }


 setId(e){

   let t = this.state.data.find(a => (a.id+"") === e.target.id);
   console.log(t);
   this.setState({
    targetValue:t,
   })
 }

  render(){

    return (
   
      <BrowserRouter>
     

    <Switch>
    <Route exact path="/home">
        <Banner search={this.search}/>
        <Home data={this.state.data} setId={this.setId}/>
      </Route>
      <Route  path="/home/:id" >
         <Id data={this.state.targetValue}/>
      </Route>
    </Switch>

      </BrowserRouter>
     
  
  );
  }

}

export default App;
