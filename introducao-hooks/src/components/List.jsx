import { useEffect, useState } from "react"


function List({getItem}) {

    const [myItem, setMyItem] = useState([]);

    useEffect (() =>{
        console.log('carregando itens');
        
        setMyItem(getItem)
        
    },[getItem]);

  return (
    <div>
      Lista:
      <div>
        {myItem.map((item , key) => (
            <p key={key}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default List
