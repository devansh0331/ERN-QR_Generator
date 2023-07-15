const  qrCODE = require('qrcode')

exports.scanQRCode =  (req , res) => {
    
    const {url , hello} = req.body
  
  
    console.log("Body URL" + url);
    if(url === ''){
        console.log("Empty URL");
        res.send("Empty URL")
    }
    else{
        qrCODE.toDataURL(url, function(err , url){
           
                console.log(url);
                res.json({msg : url, status:200})
                // res.send.addressQrCodeUrl(url);

                // resolve();
            
            
        })
    }
}