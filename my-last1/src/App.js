

import React,{Component}from "react";
import "./index.css"

import Body from './Component/Body/Body'

import Header from './Component/Header/Header'


 class  App extends Component {
    render(){
      return (
         <div className="App">
            <Header/>
            <Body/>
         </div>
       )
    }
  
}
export default App