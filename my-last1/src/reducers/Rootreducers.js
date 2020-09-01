// This is the initial state
let initialState = {
    ModalState :false,
    ModalDetails :{
     symbol:"a",
     name:":mycompany",
     noofshares:null,
     buyprice:null,
     date:null
    },
    myStocks :
    [
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
    ],
 myStocks:[]
}

// This is your reducer

const rootReducer = (state = {...initialState}, action) => {
    switch(action.type){
        case "SHOW_MODAL":
            
            state = {
                ...state,
                ModalState: true
            }
            break;
            case "HIDE_MODAL":
            
            state = {
                ...state,
                ModalState: false
            }
            break;
            case "UPDATE_SYM_NAME":
            
            state = {
                ...state,
                ModalDetails :{
                    ...state.ModalDetails,
                    symbol:action.payload.symbol,
                    name:action.payload.name
                }
            }
           break;
            case "ADD_STOCKS":
            
            state = {
                ...state,
                myStocks:[...state.myStocks,action.payload.stock]
                
            }
            
            break;
            case "INIT_STOCKS":
            
            state = {
                ...state,
                myStocks:[...action.payload.stock]
                
            }
            
            break;
            case "DELETE_STOCKS":
            let deletedStockNum = -1;
            for(let i=0;i<state.myStocks.length;i++){
               if (state.myStocks[i]['key']==action.payload.key) {
                   deletedStockNum=i;
               }
            }
            let newArray =state.myStocks.splice(deletedStockNum,1)
            state = {
                ...state,
                myStocks:[...newArray]
                
            }
            
            break;
        case "OTHER_ACTION":
            break;

    }
    return state;
}

export default rootReducer;