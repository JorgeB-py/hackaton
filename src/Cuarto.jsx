import { useEffect, useState } from "react";

export default function Cuarto() {
    const [seconds, setseconds] = useState(55);
    const [minutes, setminutes] = useState(0);
    const [running, setrunning] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(running) {
                if (seconds === 59) {
                    setseconds(0);
                    setminutes(minutes => minutes+1);
                }else{
                    setseconds(seconds => seconds+1);
                }        
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    const startTimer = () => {
        setrunning(true);
    }

    const stopTimer = () => {
        setrunning(false);
    }

    const resetTimer = () => {
        setseconds(0);
        setminutes(0);
    }

    return (
        <>
            <div className='container-sm d-flex justify-content-center' style={{ height: '35vh' }}>
                <div className='text-center cont-bar'>
                    <h1 className='text-center p-4'>Timer</h1>
                    <h2>{minutes}:{seconds.toString().padStart(2, '0')}</h2>
                    <div className='d-flex justify-content-center align-items-center mt-4'>
                        <button className='btn btn-primary me-2' onClick={startTimer}>Start</button>
                        <button className='btn btn-danger me-2' onClick={stopTimer}>Stop</button>
                        <button className='btn btn-warning' onClick={resetTimer}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    );

}