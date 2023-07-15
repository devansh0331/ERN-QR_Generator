
import './App.css';
import React, { useState } from 'react'
import { Audio } from 'react-loader-spinner'
import GridLoader from "react-spinners/GridLoader"


function App() {

  const [url, seturl] = useState('')
  const [qr, setQR] = useState('')
  
  const [qrName, setQRName] = useState('')
  const [loading , setLoading] = useState(false)
  const [bool , setBool] = useState(false)

  const handleOnSubmit= async (e) => {
    setLoading(true)
    setQR('qr')
    e.preventDefault()
    // console.log(url);
    
    const hello = "Hello World"
    const parsedData = {hello , url}
    const response = await fetch('https://qr-generator-syx2.onrender.com/api/scanQRCode/' ,{method:'POST' ,headers: { 'Content-Type': 'application/json' },body :JSON.stringify(parsedData)})
    // const data = response.json()
    // console.log("Data"  + data);s
    // const parsed = await response.json()
    const data = await response.json()
    // console.log("Response " + data.msg);
    setLoading(false)
    
    setQR(data.msg)
    // console.log("Data" + response.data);
    // setQR(response.data)
      
  }
  

  return (
    <div className="App">
      
      <h1>QR Code Generator</h1>
      
      <form action="" onSubmit={handleOnSubmit}>
          <input type="text" placeholder='Enter a valid URL' value={url} onChange={e => {seturl(e.target.value)}}/>
          <button>Generate</button>
      </form>

    {/* {url && <> */}

     {qr && <div>
      {!loading ?  <img src={qr} alt="qrCode" /> : <GridLoader color="#0000FF" />}
      <p>Scan this QR and jump to your URL <br></br><br></br>or</p>
      <div className='moredetails'>
      <input type="text" value={qrName} placeholder='"QR" or Rename...' onChange={e => setQRName(e.target.value)} id="r-inp" />
      {/* <button id="r-btn">Rename</button> */}
      </div>
      <a href={qr} download={qrName ? `${qrName}` : 'QR'}><button id='d-btn'>Download</button></a>
      </div>}
     
    {/* </>
    
    } */}

    </div>
  );
}

export default App;
