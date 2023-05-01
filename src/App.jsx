import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Form from "./components/Form/Form"
import Team from "./components/Team/Team"
import Footer from "./components/Footer/Footer"

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const newCollaboratorAdded = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        //o nome times é o que vai ser usando com o props no Form.jsx
        times={times.map((time) => time.nome)}
        registerCollaborator={(colaborador) =>
          newCollaboratorAdded(colaborador)
        }
      />
      {times.map((time) => (
        <Team
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
