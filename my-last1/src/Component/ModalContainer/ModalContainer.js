import React,{ Component } from "react";
import CustomModel from "../CustomModel/CustomModel";
import {connect} from 'react-redux'
import {HideModal,addStocks} from '../../Actions/RootActions'

class ModalContainer extends Component{
    

    render(){
        return(
            this.props.ModalState?
<CustomModel 
addStocks = {this.props.addStocks}
HideModal={this.props.HideModal}
             ModalDetails={this.props.ModalDetails}
/>:null
        )
    }
}

const mapDispatchToProps = dispatch => ({
HideModal: (obj) => dispatch(HideModal(obj)),
addStocks : (obj) => dispatch(addStocks(obj)),
})

const mapStateToProps = state => ({
    ModalState :state.ModalState,
    ModalDetails:state.ModalDetails
})

export default connect(mapStateToProps,mapDispatchToProps)(ModalContainer)
