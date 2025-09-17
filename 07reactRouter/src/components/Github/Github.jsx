import React, { useEffect , useState } from 'react'
import { useLoaderData }from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/SiddhanthChauhan')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt={data.login} className='mx-auto rounded-full w-50 h-50' />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = fetch('https://api.github.com/users/SiddhanthChauhan')
    return (await response).json()
}
