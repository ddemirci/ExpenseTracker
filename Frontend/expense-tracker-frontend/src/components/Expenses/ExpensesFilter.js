import {useState, useEffect} from 'react';
import classes from './ExpensesFilter.module.css';
import Select from '../UI/Select';
const ExpensesFilter  = (props) => {
    
    const [yearOptions,setYearOptions] = useState([]);
    const [monthOptions, setMonthOptions] = useState([]);

    let today = new Date();
    let year = today.getFullYear();

    useEffect( () => {
      let arr = [];
      for(let i = year; i > year-5; i--){
        arr.push(<option key={i} value={i} >{i}</option>);
      }
      setYearOptions(arr);
    },[])

    useEffect(() => {
      let months = ["January","February","March", "April","May", "June", "July","August","September","October","November","December"];
      if(props.selectedYear.toString() === year.toString())
      {
        let month = today.getMonth();
        months = months.slice(0,month+1);
      }

      setMonthOptions(months.map((month,index) => {
        return <option key={index} value={index}>{month}</option>
      }));
    },[props.selectedYear]);

    const monthChangedHandler = (event) => {
      props.monthHandler(event.target.value);
    }

    const yearChangedHandler = (event) => {
      props.yearHandler(event.target.value);
    }

    return(
       <div className={classes.expenses_filter}>
        <div className={classes.expenses_filter__control}>
          <Select selected={props.selectedMonth} id='month-select' onChangeHandler={monthChangedHandler}> {monthOptions}</Select>
          <Select selected={props.selectedYear} id='year-select' onChangeHandler={yearChangedHandler}> {yearOptions}</Select>
        </div>
      </div>
    );
}

export default ExpensesFilter;