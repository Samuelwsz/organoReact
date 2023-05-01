import "./List.css"

const List = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.toChanged(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default List
