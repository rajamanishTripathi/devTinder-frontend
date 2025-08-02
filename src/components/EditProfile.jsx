import React, { useState } from 'react'
import Usercard from './UserCard';
import axios from 'axios';
import {BASE_URL} from '../utils/constants'
import { useDispatch } from 'react-redux';

const EditProfile = ({user}) => {

    const [firstName, setFirstName] =useState(user.firstName);
    const [lastName, setLastName] =useState(user.lastName);
    const [photourl, setPhotourl] =useState(user.photourl);
    const [age, setAge] =useState(user.age);
    const [gender, setGender] =useState(user.gender);
    const [skills, setSkills] =useState(user.skills);
    const [about, setAbout] =useState(user.about);
    
    const [error,setError] = useState("");
    const [successMessage,setSuccessMessage] = useState(false);
    const dispatch = useDispatch();

    const saveProfile = async() => {
        setError("");
        setSuccessMessage(true);
        try{
             const res = await axios.patch(
                BASE_URL+"/profile/edit",
                {firstName, lastName, photourl ,age ,gender,skills,about},
                {withCredentials:true}
            );
            dispatch(addUser(res?.data?.data));
            

        }
        catch(err){
             setError(err.response.data);
        }
        
    }
  return (
    <div className='flex justify-center my-10'>
        <div className='flex justify-center mx-10'>
        <div className="card card-dash bg-base-300 w-96">
            <div className="card-body">
                <h2 className="card-title flex justify-center">Edit Profile</h2>
                <div>
                    <div className='label'>
                        <span className='label-text'>First Name</span>
                    </div>
                    <label className="input validator">
                        <input type="text"
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>Last Name</span>
                    </div>
                    <label className="input validator">
                        <input type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>Photo</span>
                    </div>
                    <label className="input validator">
                        <input type="text"
                        value={photourl}
                        onChange={(e) => setPhotourl(e.target.value)} />
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>Age</span>
                    </div>
                    <label className="input validator">
                        <input type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>Gender</span>
                    </div>
                    <label className="input validator">
                        <input type="text" 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)} />
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>Skills</span>
                    </div>
                    <label className="input validator">
                        <input type="text"
                        value={skills} 
                        onChange={(e) => setSkills(e.target.value)} />
                    </label>
                </div>
                <div>
                    <div className='label'>
                        <span className='label-text'>About</span>
                    </div>
                    <label className="input validator">
                        <input type="text" 
                        value={about}
                        onChange={(e) => setAbout(e.target.value)} />
                    </label>
                </div>
                <p className='text-red-600'>{error}</p>
                <div className="card-actions flex justify-center my-5">
                    <button className="btn btn-primary" onClick={saveProfile}>Save</button>
                </div>
                 {successMessage && 
                    <div className='text-green-700 my-5 flex justify-center text-2xl'>
                    Saved Successfully
                    </div>
                 }
            </div>
        </div>
        </div>
        <Usercard user={{firstName, lastName, photourl ,age ,gender,skills,about}}/>
    </div>
  )
};

export default EditProfile;