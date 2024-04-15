import React from 'react'
import UserData from '../components/UserData'
import {userData} from '../data/userdata'

import './activepage.css'
import { FaList, FaMicrosoft, FaSearch, FaWindows } from 'react-icons/fa'
import UserDataBlockView from '../components/UserDataBlockView'
const ActiveUsers = () => {
   
  return (
    <>
    <div className="ActiveUsers ">
      <div className="titleBar">
        <h2>TITLE</h2>
          <div className="searchBox">
            <FaSearch/>
            <input type="text"  />
          </div>
          <div className="tit-right">
            <FaMicrosoft/>
            <FaList/>
          </div>
      </div>
      <UserData id={'ID'} name= {'name'}  date={'Date'} active={"Membership"}   validity={"Validity"} />
      {
        userData.map((elem,id)=>{
        
          return <UserData key={id} id={elem.id}   name={elem.Firstname+' '+elem.Lastname} active={elem.membershipStatus} validity={elem.validity}arr={JSON.stringify(elem)} />
        })
      }
    </div>
    <div className='block-view'>

    <UserDataBlockView/>
   
    </div>

    </>
  )
}

export default ActiveUsers