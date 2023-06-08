import React from "react";


class AddUser extends React.Component{
    userAdd={}
    constructor(props){
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            bio:"",
            age: 1,
            isHappy:false
        }
    }
    render(){
        return(
            <form ref={(el)=> this.myForm = el}>
                <input placeholder="Имя" onChange={(event) => this.setState({firstname: event.target.value})}/>
                <input placeholder="Фамилия" onChange={(event) => this.setState({lastname: event.target.value})}/>
                <input placeholder="Биография" onChange={(event) => this.setState({bio: event.target.value})}/>
                <input placeholder="Возрот" onChange={(event) => this.setState({age: event.target.value})}/>
                <label htmlFor="isHappy">Happy?</label>
                <input type="checkbox" id="isHappy"onChange={(event) => this.setState({isHappy: event.target.checked})}/>
                <button type="button" onClick={() =>{
                    this.myForm.reset()
                    this.userAdd = {
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                        
                }
                }>Доавить</button>
            </form>
            

        )
    }

    
}
export default AddUser