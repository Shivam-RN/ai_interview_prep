import { isAuthenticated } from '@/lib/actions/auth.action';
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const RootLayout = async({children} : {children :ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
         <Image 
  src="/logo.svg" 
  alt="MockMate Logo" 
  width={38}  // for example, 38 * 4 (if w-38 = 9.5rem, or adjust as per your design)
  height={32} 
  
/>
          <h2 className="text-primary-100">InterPrep</h2>
        </Link>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
