import { useState } from "react"
import Button from "../Button/Button.jsx"
import List from "../List/List.jsx"
import TextInput from "../TextInput/TextInput.jsx"
import "./Form.css"

const Form = (props) => {
  /*const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ]*/
  //hooks
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const SaveForm = (event) => {
    event.preventDefault()
    props.registerCollaborator({ nome, cargo, imagem, time })
    setNome("")
    setCargo("")
    setImagem("")
    setTime("")
  }

  return (
    <section className="sectionForm">
      <form onSubmit={SaveForm}>
        <h2>Preencha os dados da sua equipe</h2>
        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          toChanged={(valor) => setNome(valor)}
        />
        <TextInput
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          toChanged={(valor) => setCargo(valor)}
        />
        <TextInput
          label="Imagem"
          placeholder="Endereço da imagem"
          valor={imagem}
          toChanged={(valor) => setImagem(valor)}
        />
        <List
          required={true}
          label="Time"
          itens={props.times}
          valor={time}
          toChanged={(valor) => setTime(valor)}
        />
        <Button texto="Criar Card" />
      </form>
    </section>
  )
}

export default Form
