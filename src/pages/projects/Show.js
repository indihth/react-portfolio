import { useParams } from "react-router-dom"

// import json, look for project with matching slug

const Show = () => {
    const { slug } = useParams();

  return (
    <div>Show Project: {slug}</div>
  )
}

export default Show