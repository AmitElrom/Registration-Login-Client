import React, { useEffect } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Home = () => {

  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    console.log(cookies);
      (async () => {
          const { data } = await axios.get("http://localhost:8000/profile", {
            headers : {'Set-Cookie' : cookies['access-token']}
          })
          console.log(data);
        })();          
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home