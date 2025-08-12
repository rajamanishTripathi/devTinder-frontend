import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUseFromFeed } from "../utils/userFeed";

const Usercard = ({user}) => {
    const {_id,firstName, lastName, photourl ,age ,gender,skills,about} = user;
    const dispatch = useDispatch();

    const handleSendRequest = async(status,userId) => {
         try{
              await axios.post(
                BASE_URL+"/request/send/"+status+"/"+userId,
                {},
                {withCredentials:true}
            );
            dispatch(removeUseFromFeed(userId));
         }
         catch(err){
             //
         }
    }

    
    

   //  console.log(user);
    return(
        <div className="card bg-base-300 w-70 shadow-sm">
            <figure>
            <img src={user.photourl} alt="User Photo" />
            </figure>
            <div className="card-body">
            <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
            {age && gender && <p>{age+", "+gender}</p>}
            <p>{user.about}</p>
            {skills && <p>{skills}</p>}
            <div className="card-actions flex justify-end">
                <button className="btn btn-primary" onClick={() => handleSendRequest("ignored",_id)}>Ignored</button>
                <button className="btn btn-secondary" onClick={() => handleSendRequest("interested",_id)}>Interested</button>
            </div>
            </div>
        </div>
    );
};

export default Usercard;