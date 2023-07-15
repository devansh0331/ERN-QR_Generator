
import './App.css';
import React, { useState } from 'react'


function App() {

  const [url, seturl] = useState('')
  const [qr, setQR] = useState('')
  
  const [qrName, setQRName] = useState('')


  const handleOnSubmit= async (e) => {
    e.preventDefault()
    // console.log(url);
    
    const hello = "Hello World"
    const parsedData = {hello , url}
    const response = await fetch('http://localhost:5000/api/scanQRCode/' ,{method:'POST' ,headers: { 'Content-Type': 'application/json' },body :JSON.stringify(parsedData)})
    // const data = response.json()
    // console.log("Data"  + data);s
    // const parsed = await response.json()
    const data = await response.json()
    // console.log("Response " + data.msg);
    setQR(data.msg)
    // console.log("Data" + response.data);
    // setQR(response.data)
      
  }
  

  return (
    <div className="App">
      
      <h1>QR Code Generator</h1>
      
      <form action="" onSubmit={handleOnSubmit}>
          <input type="text" placeholder='Enter a valid URL' value={url} onChange={e => seturl(e.target.value)}/>
          <button>Generate</button>
      </form>

    {/* {url && <> */}
     {qr && <div>

      <img src={qr} alt="qrCode" />
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
