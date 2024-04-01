import React, { useContext, useState } from 'react'

const context = React.createContext()
export default function Context({children}) {
    const [count,setCount] = useState(1);
    const [popUp,setPopUp] = useState(false)
    const [formObj, setFormObj] = useState({
      name : '',
      email: '',
      phoneNumber: '',
      textArea: ''
  })
  return (
    <context.Provider value={
      {count, setCount,popUp,setPopUp,formObj,setFormObj}
      }>
        {children}
    </context.Provider>
  )
}

export function useGlobalContext(){
    return useContext(context)
}
