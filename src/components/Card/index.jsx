import { useNavigate } from "react-router-dom";
import "./styles.css";
import { MdDelete } from "react-icons/md";

export function Card({ post }) {

  const navigate = useNavigate()

  return (
    <article className="cardContainer">
      <header>
        <h2>{post.title}</h2>
        <MdDelete size={28} color="#ed4337" />
      </header>
      <p>
        {post.descript}
      </p>

      <div className="buttonsContainer">
        <button>Cadastrar Paciente</button>
        <button onClick={() => navigate('/paciente/${posts.id}')}>Marcar Consulta</button>
      </div>
    </article>
  );
}
