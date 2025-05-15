import { useState, useEffect } from "react";

function Time() {

    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(interval);
    }, []);
    const formattedTime = time.toLocaleTimeString("es-ES",{
      weekday: "long",
      day:"numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  
    return (

        {formattedTime}

    );
}
export default Time;