import Alink from '@/src/atoms/Alink';
import Liststyle from '@/src/atoms/Liststyle'
import React from 'react'

function NavigationMenu() {
    const MyClass = 'navitem';
  return (
    <nav>
      <ul className='top-level list-none'>
        <Liststyle className={MyClass} text='Home' />
        <Liststyle className={MyClass} text='About' />
        <Liststyle className={MyClass} text='I Do' />
      </ul>
    </nav>
  )
}

export default NavigationMenu
