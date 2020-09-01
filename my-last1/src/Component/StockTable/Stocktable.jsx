import React,{Component}from "react";
import {connect} from 'react-redux'
import axios from 'axios'
import {initStock,DeleteStock} from '../../Actions/RootActions'
import './Stocktable.css'


/*const selectedData =[
    {
        symbol:"A",
        name:"A",
        number:100,
        buy:1000,
        curr:2000,
        profit:4000,
        action:"action"
   },
   {
    symbol:"B",
    name:"B",
    number:100,
    buy:1000,
    curr:2000,
    profit:4000,action:"action"
},
{
    symbol:"C",
    name:"C",
    number:100,
    buy:1000,
    curr:2000,
    profit:4000,action:"action"
},
{
    symbol:"D",
    name:"D",
    number:100,
    buy:1000,
    curr:2000,
    profit:4000,action:"action"
},
{
    symbol:"E",
    name:"E",
    number:100,
    buy:1000,
    curr:2000,
    profit:4000,
    action:"action"
}
]*/
class Stocktable extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleDelete(key){
        let url=`https://financial-portfolio-7b98c.firebaseio.com/myStocks/`+key+'.json'
        axios.delete(url).then((response)=>{
            this.props.DeleteStock({
                key:key
            })

        })

        console.log(key)
        

    }
    componentDidMount(){
        let url=`https://financial-portfolio-7b98c.firebaseio.com/myStocks.json`
        let myArr=[];
        axios.get(url).then((response)=>{
            console.log(response)
           
            if(response.data){
                for (let [key, value] of Object.entries(response.data)) {
                    //console.log(`${key}: ${value}`);
                    value['key']=key
                    myArr.push(value)
                    console.log(myArr)
                    
                  }
                  this.props.initStock({
                    stock:[...myArr]
                })
            }
            })
    }
    render(){
        return(
            <div className="tableMainContainer">
      <div className="tableHeader">My Stocks</div>
      <div className="tableContainer">
          {
              this.props.myStocks.length?
          <table className="d">
              <tr>
                  <th>Stock Symbol</th>
                  <th>Stock name</th>
                  <th>no.of shares</th>
                  <th>buy price</th>
                  <th>currentprice</th>
                  <th>profit/loss</th>
                  <th></th>

              </tr>
        {
          this.props.myStocks.map((obj)=>(
            <tr>
              <td>{obj.symbol}</td>
          <td>{obj.name}</td>
          <td>{obj.count}</td>
          <td>{obj.price}</td>
          <td>{obj.curr}</td>
          <td>{obj.profit}</td>
          <td className="button" onClick={()=>this.handleDelete(obj.key)}>stop Tracking</td>
     
          
            </tr>

          ))
        }
        </table>
        :"no stocks selected"
    }
      </div>
      </div>
    )
        
    }
}
const mapDispatchToProps = dispatch => ({
    initStock : (obj) => dispatch(initStock(obj)),
    DeleteStock : (obj) => dispatch(DeleteStock(obj)),
})

const mapStateToProps = state => ({
    myStocks :state.myStocks,
})

export default connect(mapStateToProps,mapDispatchToProps)(Stocktable)