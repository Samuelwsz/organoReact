import Colaborator from "../Colaborator/Colaborator"
import "./Team.css"

const Team = (props) => {
  const cssS = { backgroundColor: props.corSecundaria }
  const cssP = { borderColor: props.corPrimaria }

  return props.colaboradores.length > 0 ? (
    <section className="time" style={cssS}>
      <h3 style={cssP}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => {
          return (
            <Colaborator
              corDeFundo={props.corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />
          )
        })}
      </div>
    </section>
  ) : (
    <section></section>
  )
}

export default Team
