import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Tercero() {
    const [json, setjson] = useState({ Username: '', Fullname: '', Age: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        if(e.target.attributes[2].nodeValue === 'inputName') {
            setjson({ ...json, Username: e.target.value });
        } else if(e.target.attributes[2].nodeValue === 'inputFullName') {
            setjson({ ...json, Fullname: e.target.value });
        } else if(e.target.attributes[2].nodeValue === 'inputAge') {
            setjson({ ...json, Age: e.target.value });
        }

    }

    const submitChanges = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <>
        <form className='container' onSubmit={submitChanges}>
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputFullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="inputFullName" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputAge" className="form-label">Age</label>    
                <input type="number" className="form-control" id="inputAge" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <h1>Request sent to DB with below request data</h1>
        {submitted && (
            <div>
                <h2>Username: {json.Username}</h2>
                <h2>FullName: {json.Fullname}</h2>
                <h2>Age: {json.Age}</h2>
            </div>
        )}
        </>

    );
}