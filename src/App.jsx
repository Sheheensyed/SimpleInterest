import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [Principle, setPrinciple] = useState('')
  const [rate, setRate] = useState('')
  const [year, setyear] = useState('')
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)
  const [Interest,setInterest] = useState(0)

  const validate = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target
    console.log(name);
    console.log(value);

    // match(regExp)
    // console.log(value.match('^[0-9]*$'));

    if (!!value.match('^[0-9]*$')) {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      } else if (name == 'rate') {
        setRate(value)
        setIsRate(true)
      } else {
        setyear(value)
        setIsYear(true)
      }
    } else {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      } else if (name == 'rate') {
        setRate(value)
        setIsRate(false)
      } else {
        setyear(value)
        setIsYear(false)
      }
    }

  }

  const handleReset = () => {
    setPrinciple('')
    setRate('')
    setyear('')
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

  const calculate=()=>{
    setInterest((Principle*rate*year)/100)
  }

  return (
    <>
      <div className='bg-dark d-flex justify-content-center align-items-center' style={{ height: '100vh', width: '100%' }}>
        <div className='bg-light p-5 rounded-2' style={{ width: '500px' }}>
          <h1>Simple interest App</h1>
          {<p>Calculate your simple interest easily</p>}

          <div className='bg-warning p-3 mt-4 rounded-3 d-flex justify-content-center align-items-center flex-column' style={{ height: '150px' }}>
            <h1>₹ {Interest}</h1>
            <p>Total simple interest</p>
          </div>
          <div className='my-3'>
            <div className='mb-3'>
              <TextField className="w-100" name='principle' id="outlined-basic" value={Principle} label="₹ Principle amount" variant="outlined" onChange={(e) => validate(e)} />
              {isPrinciple == false && <p className='text-danger'>*Invalid Input</p>}
            </div>

            <div className='mb-3'>
              <TextField className="w-100" name='rate' id="outlined-basic" value={rate} label="Rate of Interest (%)" variant="outlined" onChange={(e) => validate(e)} />
              {isRate == false && <p className='text-danger'>*Invalid Input</p>}
            </div>

            <div className='mb-3'>
              <TextField className="w-100" name='year' id="outlined-basic" value={year} label="Year (Yr)" variant="outlined" onChange={(e) => validate(e)} />
              {isYear == false && <p className='text-danger'>*Invalid Input</p>}
            </div>

            <div className='mb-3 d-flex justify-content-between p-3'>
              <Button disabled={isPrinciple && isRate && isYear? false:true} variant="contained" color='success' className='p-4' style={{ width: '190px' }} onClick={calculate}>Calculate</Button>
              <Button variant="outlined" className='p-4' style={{ width: '190px' }} onClick={handleReset}>Reset</Button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
