import React from'react';
import "./CustomModel.css";
import { Component } from 'react';
import axios from 'axios'
class CustomModel extends Component{
   
    state={
        currPrice:null,
        price:null,
        count:null,
        
        

    }

    HideModalHandler =()=>{
     this.props.HideModal()
    }

    savehandler=()=>{

        let url=`https://financial-portfolio-7b98c.firebaseio.com/myStocks.json`
        let obj={         
            symbol:this.props.ModalDetails.symbol,
            name:this.props.ModalDetails.name,
            count:this.state.count,
            price:this.state.price
            }
            
        axios.post(url,obj).then((response)=>{
console.log(response)
})
this.props.addStocks({
    stock:obj
})
this.props.HideModal({
    stock:obj
})
    }
    componentDidMount(){
let url=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=R1NCP7DHTAMQZ9G1&symbol=`+this.props.ModalDetails.symbol;
  axios.get(url).then((response)=>{
      console.log(response)
      
      if(response.data && response.data["Time Series (Daily)"]){
        let value =response.data["Time Series (Daily)"][response.data["Meta Data"]["3. Last Refreshed"]]["4. close"]
        this.setState({
            currPrice:value
        })
      }
      

  })
    }
    render(){

    
    return(
        <div className ="CustomModel">CustomModel
        <div className="contentDiv">
            <div className="ModalContainer"> 
                <table>
                    <tr>
                        <td>company name</td>
                        <td>{this.props.ModalDetails.name}</td>
                    </tr>
                    <tr>
                        <td>current price</td>
                        <td>{this.state.currPrice}</td>
                    </tr>
                    
                    <tr>
                        <td>no.of shares</td>
                        <td><input onChange={(ev)=>this.setState({count:ev.target.value})}type="number"/></td>
                    </tr>
                    <tr>
                        <td>buy price</td>
    <td><input onChange={(ev)=>this.setState({price:ev.target.value})} type="number"/></td>
                    </tr>
                    <tr>
                        <td>buy date</td>
    <td><input type="date"/></td>
                    </tr>
                    <tr>
                        <td>action</td>
                    </tr>
                </table>

            </div>
           
            <div className="ButtonDiv">
                <div
                onClick={()=>this.savehandler()}
                 className="ButtonStyle">save</div>
                <div onClick={()=>this.HideModalHandler()}
                 className="ButtonStyle" >cancel</div>
            </div>
        </div>
        </div>
    )
}
}
export default CustomModel