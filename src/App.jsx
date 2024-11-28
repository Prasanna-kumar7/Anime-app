import React, { useEffect, useState } from 'react'

const App = () => {

    const [animeData, setanimeData] = useState()
    const [search, setSearch] = useState('Naruto')

    const fetchData = async () => {
        const resData = await fetch(`https://api.jikan.moe/v4/anime?q=${search}naruto&swf`)
        const jsonData = await resData.json()
        setanimeData(jsonData.data);
    }

    useEffect(() => {
        fetchData()
    },[search])
  return (
    <>
    </>
  )
}

export default App