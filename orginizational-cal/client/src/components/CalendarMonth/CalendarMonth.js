// import React from "react";
// import "./CalendarMonth.css";
// import { dateFns, format, formatDistance, formatRelative, subDays } from 'date-fns';



// // const CalendarMonth = props => (
// //   <CalDay />
// // );

// // export default CalendarMonth;


// class Day extends React.Component {

//  const test = () => {

//   const classes = ['Calendar_Day']
 
//  if (dateFns.isWeekend(props.date)) {
//    classes.push( 'Calendar_Day_Weekend' )
//  }
  
//   if (dateFns.getMonth(props.currentDate) !== dateFns.getMonth(props.date)) {
//     classes.push( 'Calendar_Day_Out_Of_Scope' )
//   }
// }
  
// render() {
//  return (
//    <div className={classes.join(' ')}> 
//       { props.showMonth ? dateFns.format(props.date, 'DD') : dateFns.format(props.date, 'D') } 
//    </div>
//    )
// }
// }

// export default Day;


// // const CalendarHeader = (props) => {
// //   return (
// //     <div className="Calendar_Header">
// //       <h3>{dateFns.format( props.currentDate, 'MMMM YYYY' )}</h3>
// //       <span className="Calendar_Navigation">
// //         <div className="btn-group">
// //            <button type="button" className="btn btn-primary" onClick={props.prev}>&lt;</button>
// //            <button type="button" className="btn btn-primary" onClick={props.today}>Today</button>
// //            <button type="button" className="btn btn-primary" onClick={props.next}>&gt;</button>
// //         </div>
// //       </span>
// //     </div>
// //   )
// // }

// // export default CalendarHeader;

// // const DayHeaders = () => {
// //   return (
// //     <div className="Calendar_Day_Headers">
// //       <div>Sun</div>
// //       <div>Mon</div>
// //       <div>Tue</div>
// //       <div>Wed</div>
// //       <div>Thu</div>
// //       <div>Fri</div>
// //       <div>Sat</div>
// //     </div>
// //   )
// // }

// // class Calendar extends React.Component {

// //   constructor() {
// //     super()
    
// //     let initialDate = new Date()
// //     initialDate = dateFns.setDate(initialDate, 1)
    
// //     this.state = {
// //       currentDate: initialDate
// //     }
    
// //     this.prev = () => {
// //       const prev = dateFns.subMonths(this.state.currentDate, 1)
// //       this.setState({currentDate: prev})
// //     }
  
// //     this.next = () => {
// //       const next = dateFns.addMonths(this.state.currentDate, 1)
// //       this.setState({currentDate: next})
// //     }

// //     this.today = () => {
// //       let today = new Date()
// //       today = dateFns.setDate(today, 1)
// //       this.setState({currentDate: today})
// //     }
// //   }
  
// //   render() {
// //     const firstOfTheWeek = dateFns.startOfWeek( this.state.currentDate )
// //     const currentDate = new Date(this.state.currentDate.getTime())
// //     const calendarDays = []
// //     let dateIncrement = new Date( firstOfTheWeek.getTime() )
    
// //     let inc = 0
// //     while(inc < 42) {
// //       if (dateFns.getDate(dateIncrement) === 1) {
// //         calendarDays.push( <Day date={ dateIncrement } currentDate={currentDate} showMonth /> )
// //       }
// //       else {
// //         calendarDays.push( <Day date={ dateIncrement } currentDate={currentDate} /> ) 
// //       }
// //       inc+=1
// //       dateIncrement = dateFns.addDays( dateIncrement, 1 )
// //     }
    
// //     const wrapperStyle={
// //       height: '100%',
// //       width: '100%'
// //     }
    
// //     return (
// //       <div style={wrapperStyle}>
// //         <CalendarHeader 
// //           currentDate={currentDate} 
// //           next={this.next} 
// //           prev={this.prev} 
// //           today={this.today} />
// //         <DayHeaders />
// //         <div className="Calendar">
// //           {calendarDays}
// //         </div>
// //       </div>
// //     )
// //   }
// // }

// // export default Calendar;





// // ReactDOM.render(<Calendar/>, document.getElementById('app'))

