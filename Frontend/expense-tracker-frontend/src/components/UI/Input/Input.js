const Input = props => {
    
    return <div className={props.className}>
        <label>{props.label}</label>
        <input value={props.value} 
            type={props.type} 
            onChange={props.onChangeHandler}
            min= {props.min ? props.min : 'undefined'}
            step= {props.step ? props.step : 'undefined'}
            minLength = {props.minLength ? props.minLength : 'undefined'}
            />
    </div>    
}

export default Input;