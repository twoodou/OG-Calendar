import React from "react";
import { format, formatDistance, formatRelative, subDays } from 'date-fns';



const Day = (props) => {
 const classes = ['Calendar_Day']
 
 if (dateFns.isWeekend(props.date)) {
   classes.push( 'Calendar_Day_Weekend' )
 }
  
  if (dateFns.getMonth(props.currentDate) !== dateFns.getMonth(props.date)) {
    classes.push( 'Calendar_Day_Out_Of_Scope' )
  }
  
 return (
   <div className={classes.join(' ')}> 
      { props.showMonth ? dateFns.format(props.date, 'MMM DD') : dateFns.format(props.date, 'D') } 
   </div>
   )
}

export default CalDay;