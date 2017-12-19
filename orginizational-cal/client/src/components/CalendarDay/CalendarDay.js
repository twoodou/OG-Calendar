import React, {Component} from "react";
import "./CalendarDay.css";
import Day from "../CalendarMonth/CalendarBuild/Day.js";


const Modal = ({ show, hide }) => (
  <div style={{ display: show ? 'block' : 'none' }} className='calendar-day-pnl pnl'>
    <p> did it work? </p>
  </div>
)

class CalendarDay extends React.Component {
  constructor() {
    super()
    this.state = { displayModal: false }
    this.handleModalDisplay = this.handleModalDisplay.bind(this)
  }
  handleModalDisplay(e) {
    e.preventDefault()
    this.setState({ displayModal: !this.state.displayModal })
  }
  render() {
    const display = this.state.displayModal.toString()
    return (
      <div className="calendar-day-comp" onClick= {this.handleOpenModal} >
			  <a onClick={this.handleModalDisplay} >
				  <Day />
			  </a>
        
      <Modal className="calendar-day-pnl pnl" show={this.state.displayModal} hide={this.handleModalDisplay} />
		</div>
    )
  }
}




export default CalendarDay;
