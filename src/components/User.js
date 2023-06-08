import React from "react"
import AddUser from "./AddUser"
import {IoCloseCircleSharp} from 'react-icons/io5'
import { GrEdit } from "react-icons/gr"
class User extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            editeForm: false
        }
    }
    user = this.props.user
    render(){
        return(
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <GrEdit onClick={() => {
                    this.setState({
                        editeForm: !this.state.editeForm
                    })
                }} className="edit-icon"/>
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <b>{this.user.isHappy ? "Happy :)" : "not :("}</b>

                {this.state.editeForm && <AddUser user={this.user} onAdd={this.props.onEdite} />}
            </div>
        )
    }

    
}
export default User