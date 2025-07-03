import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState()
    useEffect(()=>{
        fetch('https://api.github.com/users/castial004').
        then( response => response.json()).
        then( data => setData(data)).catch( (e)=>{
            console.log("error")
        })
    },[])
  return (
    <>
        <div className='flex flex-row items-center text-white bg-gray-700'>
            <div className='p-5'>
                <img src={data.avatar_url} alt='profile_image'/>
            </div>
            <div>
                <ul className='text-3xl'>
                    <li>
                        Followers: &nbsp;
                        <span className='text-orange-700'>{data.followers}</span>
                    </li>
                    <li>
                        Public Repositories: &nbsp;
                      <span className='text-orange-700'>
                        {data.public_repos}
                      </span>
                    </li>
                    <li>
                        Url: &nbsp;
                        <span className='text-orange-700'>
                             {data.html_url}
                        </span>
                        
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Github
