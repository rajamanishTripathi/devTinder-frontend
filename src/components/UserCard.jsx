const Usercard = ({user}) => {
    const {firstName, lastName, photourl ,age ,gender,skills,about} = user;
     console.log(user);
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
                <button className="btn btn-primary">Ignored</button>
                <button className="btn btn-secondary">Interested</button>
            </div>
            </div>
        </div>
    );
};

export default Usercard;