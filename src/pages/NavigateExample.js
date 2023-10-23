import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavigateExample = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log("clicked");
        navigate('/');
    }

  return (
    <>
        <h1>This is the navigate example</h1>
        <button onClick={handleClick}>Click to navigate</button>
    </>
  )
}

export default NavigateExample