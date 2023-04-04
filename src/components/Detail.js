import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  // retrieve id parameter from URL
  const { id } = useParams()

  // manage the data state with initial value of an empty array
  const [data, setData] = useState([])

  // fetch the post data from external API whenever the id parameter changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        // update the data state with the fetched post data
        setData(data)
        console.log(data)
      })
      .catch(error => {
        // handle errors
        console.log('the error', error)
      })
  }, [id])

  // render Loading... if data is null, else render post data
  if (!data) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='b'>
        <img src={`https://picsum.photos/200?random=${id}`} alt='pic' />
        <h1>Id: {id}</h1>
        <h1>Title: {data.title}</h1>
        <h1>Body: {data.body}</h1>
      </div>
    )
  }
}

export default Detail 