import { useForm } from "react-hook-form"
import { api } from "../../lib/axios"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import "./styles.css";


{/*Validação dos campos do formulário paciente - [Autor: Darlan Menezes]*/}
const postSchema = yup.object({
  title: yup.string().required("o campo não pode estar vazio"),
  description: yup.string().required("o campo não pode estar vazio"),
  content: yup.string().required("o campo não pode estar vazio")
})

export function Form({title, textButton}) {

  const navigate = useNavigate()

const {register, handleSubmit, reset, formState: {errors}} = useForm({
  resolver: yupResolver(postSchema)
})

function handleCreatePost(data){
  api.post("/posts", data)
  console.log("criado com sucesso.!")
  navigate("/")
  reset()
}

  return (
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <h2>{title}</h2>

      <div className="field">
        <input placeholder="Nome do Paciente" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Telefone" {...register("description")}/>
        {errors.description?.message}
      </div>

      <button type="submit">{textButton}</button>
    </form>
  );
}
