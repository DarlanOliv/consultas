import { useEffect, useState } from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import { api } from "../../lib/axios"

export function Home() {

const[posts, setPosts] = useState([])

useEffect(() => {
  api.get("/posts")
  .then((response) => {
    setPosts(response.data)
  })
  .catch((err) => {
    console.log("ocorreu um erro", err)
  })
}, [])

  return (
    <div className="feedContainer">
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
}
{/**/}