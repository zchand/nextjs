import '@/app/globals.css'
import Body from '@/src/components/common/Body';
import Footer from '@/src/components/common/Footer';
import Header from '@/src/components/common/Header';
import React from 'react';

function index() {
  return (
    
    <div className="main flex">
      <Header />
      <Body />
      <Footer />
    </div>
    
  )
}

export default index
