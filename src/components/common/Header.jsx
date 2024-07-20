import Logo from '@/src/atoms/Logo'
import Container from '@/src/atoms/Container';
import React from 'react'
import NavigationMenu from './NavigationMenu'

function Header() {
  return (
    <header>
        <Container className="header flex justify-between items-center">
            <div className='logo'>
                Zahoor
            </div>
            <div className='Navigation'>
                <NavigationMenu />
            </div>
        </Container>
    </header>
  )
}

export default Header
