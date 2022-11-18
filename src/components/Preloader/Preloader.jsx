import React, { useEffect, useState } from 'react'
import './Preloader.css'
const Preloader = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div> 
    {
    loading && 
    (
      <div id='spinner-wrapper' className="spinner-wrapper">
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    )
  }</div>)


   
}
export default Preloader
