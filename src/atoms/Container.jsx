import React from 'react'

function Container({ className, children }) {
    return (
      <div className={`${className} px-[30px] mx-auto xl:max-w-[1440px] 2xl:max-w-[1440px]`}>{children}</div>
    )
}
  
export default Container