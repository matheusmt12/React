import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams();
    return (
    <div>
        <h1>
            Mias informaçoes sobre o produto de id  {id}
        </h1>
    </div>
  )
}

export default Info