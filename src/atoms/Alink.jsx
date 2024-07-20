import React from 'react';
import Link from 'next/link';

function Alink({className, text, link}) {
  return (
    <Link href={link} className={className}>{text}</Link>
  )
}

export default Alink
