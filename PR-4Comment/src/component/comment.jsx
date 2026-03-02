import "./comment.css";
import { useState } from "react";

function Comment() {

    const [UseName, setUsename] = useState("");
    const [Email, setEmail] = useState("");
    const [Reting, setReting] = useState("");
    const [Review, setReview] = useState("");
    const [error, setError] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(UseName == ""){
            setError("Username is required");
            return;
        }

        if(Email == ""){
            setError("Email is required");
            return;
        }

        if(Reting == ""){
            setError("Rating is required");
            return;
        }

         if(Review == ""){
            setError("Rating is required");
            return;
        }

        setComments([...comments, {UseName, Email, Reting, Review}]);

        setUsename("");
        setEmail("");
        setReting("");
        setReview("");
        setError("");
    }

    return (
        <>
            <h2>Comment Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Username :</label>
                <input type="text" value={UseName} placeholder="Enter Name" onChange={(e) => setUsename(e.target.value)}/>

                <label>Email :</label>
                <input type="text" value={Email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>

                <label>Review :</label>
                <input type="text" value={Review} placeholder="Review" onChange={(e) => setReview(e.target.value)}/>

                <label>Rating :</label>
                <select value={Reting} onChange={(e) => setReting(e.target.value)}>
                    <option value="">Select Rating</option>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            {error && <p style={{color:"red"}}>{error}</p>}

            {comments.map((item, index) => (
                <div key={index}>
                    <h4>{item.UseName}</h4>
                    <p>{item.Email}</p>
                    <h6>{item.Review}</h6>
                    <span>{item.Reting}</span>
                </div>
            ))}
        </>
    );
}

export default Comment;
