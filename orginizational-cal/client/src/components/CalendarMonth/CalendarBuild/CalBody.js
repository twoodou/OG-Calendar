import React from "react";
import { dateFns, format, formatDistance, formatRelative, subDays } from 'date-fns';



class CalBody extends React.Component {

  constructor() {
    super()
    
    let initialDate = new Date()
    initialDate = dateFns.setDate(initialDate, 1)
    
    this.state = {
      currentDate: initialDate
    }
    
    this.prev = () => {
      const prev = dateFns.subMonths(this.state.currentDate, 1)
      this.setState({currentDate: prev})
    }
  
    this.next = () => {
      const next = dateFns.addMonths(this.state.currentDate, 1)
      this.setState({currentDate: next})
    }

    this.today = () => {
      let today = new Date()
      today = dateFns.setDate(today, 1)
      this.setState({currentDate: today})
    }
  }
  
  render() {
    const firstOfTheWeek = dateFns.startOfWeek( this.state.currentDate )
    const currentDate = new Date(this.state.currentDate.getTime())
    const calendarDays = []
    let dateIncrement = new Date( firstOfTheWeek.getTime() )
    
    let inc = 0
    while(inc < 42) {
      if (dateFns.getDate(dateIncrement) === 1) {
        calendarDays.push( <Day date={ dateIncrement } currentDate={currentDate} showMonth /> )
      }
      else {
        calendarDays.push( <Day date={ dateIncrement } currentDate={currentDate} /> ) 
      }
      inc+=1
      dateIncrement = dateFns.addDays( dateIncrement, 1 )
    }
    
    const wrapperStyle={
      height: '100%',
      width: '100%'
    }
    
    return (
      <div style={wrapperStyle}>
        <CalendarHeader 
          currentDate={currentDate} 
          next={this.next} 
          prev={this.prev} 
          today={this.today} />
        <DayHeaders />
        <div className="Calendar">
          {calendarDays}
        </div>
      </div>
    )
  }
}


export default CalBody;


