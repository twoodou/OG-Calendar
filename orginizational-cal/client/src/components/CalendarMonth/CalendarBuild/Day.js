import React from "react";
import moment from 'moment';

const Modal = ({ show, hide }) => (
  <div style={{ display: show ? 'block' : 'none' }} className='calendar-day-pnl pnl'>
    <p> YAY LETS GET THIS RESPONSIVE NOW</p>
  </div>
)

class Day extends React.Component {


//triggers the modal that shows you daily information
  handleModalDisplay(e) {
    console.log("you made a click");
    e.preventDefault()
    this.setState({ displayModal: !this.state.displayModal })
  }

  render() {
    const {
      day,
      day: {
        date,
        isCurrentMonth,
        isToday,
        number,
      },
      select,
      selected
    } = this.props;

    return (
      <span
        key={date.toString()}
        className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
        onClick={() =>{
                        // HandleModalDisplay(e);
                        // select(day);
                        console.log({date});
                        console.log({number});
                        // console.log({month});
                      }}>
      {number}</span>
    );
  }
}

export default Day;
