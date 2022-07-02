import React, {useState} from 'react';

export default function Unitconvertor() {
    const [inch, setInch] = useState();
    const [feet, setFeet] = useState();

    const submit = (e) => {
      e.preventDefault();
      setFeet(inch/12);
      setInch(feet*12);
    };

    
  return (
    <div className=' bg-light pb-2'>
      <form onSubmit={submit}>
      <h1 className='bg-warning py-2 text-center'>Unit Convertor Inch to Feet</h1>
      <div className="container text-center my-5 align-items-center justify-content-center">
      <h2 className='mx-4' id='inch'>INCH: <input type="number" value={inch} onChange={(e) => setInch(e.target.value)}/></h2>
      <h2 className='my-4'>=</h2>
      <h2 id='feet'>FEET: <input type="number" value={feet} onChange={(e) => setFeet(e.target.value)} /></h2>
      <button type='submit' className="btn btn-warning btn-lg my-4">Calculate</button>
      </div>
      </form>  
    </div>
  )
}
