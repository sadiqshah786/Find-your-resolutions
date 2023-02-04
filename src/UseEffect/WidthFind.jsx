import React, { useState } from 'react'

const WidthFind = () => {
    const [res,setRes] = useState({
      widthScreen : window.screen.width,
      heightScreen : window.screen.height
    })

    useState(()=>{
     window.addEventListener("resize",()=>{
         setRes({
          widthScreen : window.innerWidth,
          heightScreen : window.innerHeight,
         })
     })
    },[res])
  return (
    <div className="main">
    <div>
      <h1> Screen Resolution  <span>{res.widthScreen}</span> <span> X {res.heightScreen}</span></h1>
    </div>
    </div>
  )
}

export default WidthFind