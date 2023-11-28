import React , { useEffect, useState } from 'react'

function DarkMode() {
    const [theme , setTheme] = useState("light-theme")
    const toggleTheme = () => {
       if(theme === 'dark-theme')
      { setTheme('light-theme')}
      else{
        setTheme('dark-theme')
      }
     }
     useEffect(() => {
        document.body.className = theme;
     })
  return (
    <>
         <button className='btn' onClick={toggleTheme}>Toggle Mode added</button>
    </>
  )
}

export default DarkMode