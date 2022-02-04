
import React from 'react';
import './App.css';

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date} </p>
      
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const dd = new Date();
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        
        <CurrentDate date={dd.toLocaleString()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};

export default Calendar;
