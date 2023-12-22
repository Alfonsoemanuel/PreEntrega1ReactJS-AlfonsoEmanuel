const Button = (props) => {
    console.log(props)
    return <button onClick={props.hiceClick} style={{color: 'blue'}}>{props.label}</button>
}

export default Button