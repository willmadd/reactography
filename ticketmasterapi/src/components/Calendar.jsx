import React, { Component } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

class Calendar extends Component {

  onChange = date => {
console.log(date)
      this.props.setDate( date )
  }
  

  render() {
    return (
      <div>
        <DateRangePicker
          onChange={this.onChange}
          value={this.props.currentDate}
        />
      </div>
    );
  }
}

export default Calendar;