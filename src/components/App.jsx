import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators}  from 'redux';
import {addReminder,deleteReminder} from '../actions';


        class App extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
            dueDate:''
        }
    }

    addReminder(){
        console.log('this.state.dueDate ',this.state.dueDate);
        console.log('this.state  ',this)
        this.props.addReminder(this.state.text);
    }
    deleteReminder(id){
        // console.log('id delete ',id)
        // console.log('this patops' , this.props);
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const {reminders}=this.props;
     return (
         <ul className="list-group col-sm-4">
            {
                reminders.map(reminder =>{
                    return (
                        <li key={reminder.id} className="list-group-item">
                        <div className="list-item"> 
                        <div>{reminder.text}</div>
                        <div>{reminder.dueDate}</div>
                        </div>
                        
                            <div className="list-item delete-button"
                            onClick={()=>this.deleteReminder(reminder.id)}>
                            &#x2715;
                            </div>
                        </li>
                    )
                })
            }
         </ul>
     )
    }
  render() {
      console.log('this.props ',this.props)
    return (
      <div className="App">
        <div className="title">
        Reminder Pro
        </div>
        <div className="form-inline">
        <div className="form-group">
        <input className="form-control" 
        placeholder="I have to..?"
        onChange={event=>this.setState({text:event.target.value})}>
        </input>
        <input
        className="form-control"
        type="datetime-local"
        onChange={event=>this.setState({dueDate:event.target.value})}
        />
        
        </div>
      
        <button type="button" 
        className="btn btn-success" 
        onClick ={()=>this.addReminder()} 
        value="Add Reminder">
        Add Reminder
        </button>
      
        </div>
        {this.renderReminders()}
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder},dispatch);
// }

function mapStateToProps(state){
//    console.log('state ',state);

    return{
        reminders:state
    }
}

export default connect(mapStateToProps,{addReminder,deleteReminder}) (App);