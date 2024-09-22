import 'bootstrap/dist/css/bootstrap.min.css';
import './Segundo.css';
import { useState } from 'react';

export default function Segundo() {
    const [percentage, setPercentage] = useState('0');

    const setPercentageValue = (e) => {
        const value = e.target.value;

        if(value>=0 && value<=100) {
            setPercentage(value);
        }
    }

    return (
        <>
            <div className='container-sm d-flex justify-content-center' style={{ height: '35vh' }}>
                <div className='text-center cont-bar'>
                    <h1 className='text-center p-4'>Progress bar</h1>
                    <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ height: 30, width: '80%', margin: '0 auto' }}>
                        <div className="progress-bar" style={{ width: percentage+"%" }}></div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <h3 className='me-2'>Input percentage:</h3>
                        <input className='form-control w-25' type="text" onChange={setPercentageValue}/>
                    </div>
                </div>
            </div>
        </>
    );
}
