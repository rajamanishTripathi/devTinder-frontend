import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Requests = () => {
    const requests = useSelector((store) => store.requests);
    const dispatch = useDispatch();

    const reviewRequest = async(status,_id) =>{
          try {
            await axios.post(
                BASE_URL+"/request/review/"+status+"/"+_id,
                {},
                {withCredentials:true}
            )
            dispatch(removeRequest(_id)); 
          } catch (error) {
            //
          }
    };

    const fetchRequest = async() => {
        try{
            const res = await axios.get(BASE_URL+"/user/requests/received",{
            withCredentials:true
            });
            
            dispatch(addRequests(res.data.data));
            console.log(res.data);

        }
        catch(err){
            //
        }
    };

    useEffect( () => {
        fetchRequest();
    },[]);

     if(!requests){
        return ;
    }
    if(requests.length === 0){
        return <h1 className='flex justify-center my-10'>No Request found..... </h1>;
    }

  return requests && (
     <div className='text-center my-10'>
      <h1 className='m-10 text-center text-2xl'>Request</h1>

      {requests.map((request) => {
             const {_id,firstName, lastName, photourl ,age ,gender,skills,about} = request.fromUserId;

             return (
              <div key={_id} className='flex justify-between items-center flex-row m-4 p-2 bg-base-300 m-auto my-5 w-120 rounded-2xl'>
                <div><img  alt='photo' className='w-20 h-20 rounded-2xl' src={photourl}/></div>
                <div className='mx-4 text-left'><h2 className='bold'>{firstName+' '+lastName}</h2>
                   {age && gender && <div>{age+"  ,"+gender}</div>}
                   <div>{skills}</div>
                   <p>{about}</p>
                </div>
                <div>
                  <button className="btn btn-primary mx-2" onClick={() => reviewRequest("accepted",request._id)}>Accept</button>
                  <button className="btn btn-accent mx-2"  onClick={() => reviewRequest("rejected",request._id)}>Reject</button>
                </div>
              </div>
             )
      })}
      <div></div>
    </div>
  )
}

export default Requests
