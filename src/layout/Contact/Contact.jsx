import React, { useEffect } from 'react'
// import Header from '../../components/Header/Header'
import Left from '../../components/Left/Left'
import Right from '../../components/Right/Right'
import ContactMe from '../../components/Contact/Contact'
import "./Contact.css"
const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='contact-layout'>
      <Left />
      {/* <Header headerTitle="My Portfolio" des="My, Myself & I" /> */}
      <ContactMe/>
      <Right />
    </div>
  )
}

export default Contact
