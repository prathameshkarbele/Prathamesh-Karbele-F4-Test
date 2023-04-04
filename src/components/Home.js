import { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  // manage the data state with initial value of an empty array
  const [data, setData] = useState([])

  // fetch the post data from external API on component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        // update the data state with the fetched post data
        setData(data)
        console.log(data)
      })
  }, [])

  // render the list of posts using data state
  return (
    <div className='container'>
      {data.map((value, index) => {
        return (
          <div className='b' key={index}>
            {/* link to detail page with post id parameter */}
            <Link to={`/detail/${value.id}`} className='link'>
              <img src={`https://picsum.photos/200?random=${value.id}`} alt='pic' />
              <h4>userId: {value.userId}</h4>
              <h4>id: {value.id}</h4>
              <h4>title: {value.title.slice(0, 20)}</h4>
              <h4>body: {value.body.slice(0, 20)}</h4>
            </Link>
            {/* nested route outlet for displaying detail page */}
            <Outlet />
          </div>
        )
      })}
    </div>
  )
}

export default Home