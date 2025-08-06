import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import {addConnections} from '../utils/connectionSlice'

const Connections = () => {

    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connection);

    const fetchConnections = async() => {
        if(connections) return;
        try{
        const res = await axios.get( BASE_URL+"/user/connections",{withCredentials:true});
        console.log(res.data.data);
        dispatch(addConnections(res.data.data));

        }
        catch(err){
             //
        }
}

    useEffect(() => {
        fetchConnections();
    },[]);


    if(!connections){
        return ;
    }
    if(connections.length === 0){
        return <div>No Connection found..... </div>;
    }
  return connections && (
    <div className='text-center my-10'>
      <h1 className='m-10 text-center text-2xl'>Connections</h1>
     { connections.map((connection) => {
             const {firstName, lastName, photourl ,age ,gender,skills,about} = connection;
             return (
              <div className='flex m-4 p-2 bg-base-300 w-3xl m-auto my-5'>
                <div><img  alt='photo' className='w-20 h-20 rounded-2xl' src={connection.photourl}/></div>
                <div className='mx-4 '><h2 className='bold'>{firstName+' '+lastName}</h2>
                   {age && gender && <div>{age+"  ,"+gender}</div>}
                   <div>{skills}</div>
                   <p>{about}</p>
                </div>
              </div>
             )
      })}
      <div></div>
    </div>
  )
}

export default Connections
