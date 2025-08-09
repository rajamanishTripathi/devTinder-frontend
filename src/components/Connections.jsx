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

      {connections.map((connection) => {
             const { _id, firstName, lastName, photourl ,age ,gender,skills,about} = connection;

             return (
              <div  key={_id} className='flex flex-row m-4 p-2 bg-base-300 m-auto my-5 w-100 rounded-2xl'>
                <div><img  alt='photo' className='w-20 h-20 rounded-2xl' src={connection.photourl}/></div>
                <div className='mx-4 text-left'><h2 className='bold'>{firstName+' '+lastName}</h2>
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

export default Connections;
