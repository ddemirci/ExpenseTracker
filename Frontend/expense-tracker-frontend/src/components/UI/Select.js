const Select = (props) => {
    return(
        <select value={props.selected} id={props.id} onChange={props.onChangeHandler}>
            {props.children}
        </select>
    );
}

export default Select;