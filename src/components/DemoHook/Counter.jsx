import React, { useState, useEffect } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        return () => {
             
        }
    }, [])

    return (
        <>
            <button className="btn btn-primary"
                onClick={() => setCount(count + 1)}
            >+ 1</button>
            <p >  counter number is :  {count} </p>
        </>
    )
}
