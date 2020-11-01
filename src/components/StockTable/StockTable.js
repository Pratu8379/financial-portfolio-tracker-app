import React, {Component} from 'react';
import './StockTable.css';
// import axios from 'axios';

// import { initStock, deleteStock } from '../../actions/rootActions';
// import { connect } from 'react-redux';

const selectedStockData = [
    {
        symbol: "A",
        name: "A",
        no: 10,
        buy: 200,
        curr: 100,
        profit: 20
    }, {
        symbol: "B",
        name: "B",
        no: 10,
        buy: 200,
        curr: 100,
        profit: 20
    }, {
        symbol: "C",
        name: "C",
        no: 10,
        buy: 200,
        curr: 100,
        profit: 20
    },
];

class StockTable extends Component {
    state={
        stock: []
    };

    // handleDelete(key){
    //     console.log(key);
    //     let url = "https://finportfolio-5dbdc.firebaseio.com/mystocks/" + key + '.json';
    //     axios.delete(url).then( (response)=>{
    //         // Remove from redux store also
    //         debugger
    //         this.props.deleteStock({
    //             key: key
    //         })
    //     })
    // }
    // componentDidMount() {
    //     let url = "https://finportfolio-5dbdc.firebaseio.com/mystocks.json"
    //     let myArr = [];
    //     axios.get(url).then((response) => {
    //         console.log(response);
    //         if (response.data) {
    //             for (let [key, value] of Object.entries(response.data)) {
    //                 // console.log(`${key}: ${value}`);
    //                 value['key'] = key;
    //                 myArr.push(value);
    //             }
    //             this.props.initStock({
    //                 stocks: [...myArr]
    //             })
    //         }
    //     });
    // }
    render() {
        return (<div className="MyStocks">
            <div className="mstocks">
                My Stocks
        </div>

            <div className="tableContainer">
                {
                    
                        <table className="MyStocksTable">
                            <tr>
                                <th>Stock Symbol</th>
                                <th>Stock Name</th>
                                <th>No. of shares</th>
                                <th>Buy Price</th>
                                <th>Current Price</th>
                                <th>Profit/ Loss</th>
                                <th>Action</th>
                            </tr>
                            {
                                selectedStockData.map((obj) => (
                                    <tr>
                                        <td>
                                            {obj.symbol}
                                        </td>
                                        <td>
                                            {obj.name}
                                        </td>
                                        <td>
                                            {obj.no}
                                        </td>
                                        <td>
                                            {obj.buy}
                                        </td>
                                        <td>
                                            {obj.curr}
                                        </td>
                                        <td>
                                            {obj.profit}
                                        </td>
                                        <td onClick={()=>this.handleDelete(obj.key)}><button style={btnStyle}>Stop Tracking</button>
                                            
                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                        
                }
            </div>
        </div>);
    }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "10%",
  cursor: "pointer",
};
export default StockTable;