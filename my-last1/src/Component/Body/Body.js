import React from 'react';
import Stocktable from '../StockTable/Stocktable';
import Addstock from '../Stockselector/AddStock';
import Horsep from '../Horsep/Horsep';
import ModalContainer from '../ModalContainer/ModalContainer';


const Body = () => {
    return (
        <div>
            <Stocktable/>
            <Horsep/>
            <Addstock/>
            <ModalContainer/>
            
        </div>
    )
}

export default Body;