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
  return (
    <div>
      <div>Connections</div>
    </div>
  )
}

export default Connections
