import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
      setInterval(function(){
          setTime(new Date().toLocaleTimeString("en-in"));
      },1000);
    }, [])
    
  return (
    <div className='clock'> 
      {time}
    </div>
  )
}

export default Clock
