import React,{Component}from "react";
import axios from 'axios'
import './Addstocks.css'
import {connect} from 'react-redux'
import {ShowModal,UpdateSymName} from '../../Actions/RootActions'

class Addstock extends Component{
  constructor(props){
    super(props)
    this.state ={
      Tickers :[]
    }
  }
  componentDidMount(){
axios.get('https://financial-portfolio-7b98c.firebaseio.com/Tickers.json').then((response)=>{
console.log(response);
this.setState({
    Tickers:[...response.data]
   
})

});
/*
axios.post('https://financial-portfolio-7b98c.firebaseio.com/myStocks.json',{
  symbol:"A",
  name:'A',
  count:20,
  price:200
}).then((response)=>{
console.log(response)
})
axios.get('https://financial-portfolio-7b98c.firebaseio.com/myStocks.json').then((response)=>{
console.log(response);
})
*/
  }

  showModalHandler(obj){
    this.props.ShowModal()
    console.log(obj)
    this.props.UpdateSymName(obj)
  }
  
  render(){
    return(
      
      <div className="tickerMainContainer">
      <div className="tickerHeader">Add Stocks to myStocks</div>
      <div className="tickerContainer">
        {
          this.state.Tickers.map((obj)=>{
           if (obj.symbol=="MSFT") 
           return null
           else{
            return <div className="tickerItem">
            <div
             onClick={()=>this.showModalHandler(obj)}
             className="tickerItemSymbol">{obj.symbol}</div>
        <div className="tickerItemText">{obj.name}</div>
          </div>

           }
           
           

          })
        }
          
      </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  ShowModal: (obj) => dispatch(ShowModal(obj)),
 UpdateSymName: (obj) => dispatch(UpdateSymName(obj)),
  })
  
  const mapStateToProps = state => ({
      ModalState :state.ModalState,
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Addstock)
  
