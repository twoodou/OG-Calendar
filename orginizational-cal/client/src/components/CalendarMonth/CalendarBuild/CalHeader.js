import React from "react";
import { dateFns, formatDistance, formatRelative, subDays } from 'date-fns';
import format from 'date-fns/format';


const CalHeader = (props) => {
  return (
    <div className="Calendar_Header">
      <h3> {dateFns.format( props.currentDate, 'MMMM YYYY' )} </h3>
      <span className="Calendar_Navigation">
        <div className="btn-group">
           <button type="button" className="btn btn-primary" onClick={props.prev}>&lt;</button>
           <button type="button" className="btn btn-primary" onClick={props.today}>Today</button>
           <button type="button" className="btn btn-primary" onClick={props.next}>&gt;</button>
        </div>
      </span>
    </div>
  )
}

export default CalHeader;