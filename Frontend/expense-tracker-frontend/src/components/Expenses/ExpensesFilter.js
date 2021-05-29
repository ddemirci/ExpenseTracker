import classes from './ExpensesFilter.module.css';

const ExpensesFilter  = (props) => {
    
    const months = ["January","February","March", "April","May", "June", "July","August","September","October","November","December"];
    let year = new Date().getFullYear();
    let yearOptions = [];
    for(let i = year; i > year-5; i--){
        yearOptions.push(<option key={i} value={i} >{i}</option>);
    }

    const monthChangedHandler = (event) => {
      props.monthHandler(event.target.value);
    }

    const yearChangedHandler = (event) => {
      props.yearHandler(event.target.value);
    }

    return(
       <div className={classes.expenses_filter}>
        <div className={classes.expenses_filter__control}>
          <select value={props.selectedMonth} id='month-select' onChange={monthChangedHandler}>
            {months.map((month,index) => {
              return <option key={index} value={index}>{month}</option>
            })}
          </select>
          <select value={props.selectedYear} id='year-select' onChange={yearChangedHandler}>
            {yearOptions}
          </select>
        </div>
      </div>
    );


}

export default ExpensesFilter;