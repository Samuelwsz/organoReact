import "./TextInput.css"

const TextInput = (props) => {

  const toType = (event) => {
    props.toChanged(event.target.value)
  }

  return (
    <div className="textinput">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={toType}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default TextInput
