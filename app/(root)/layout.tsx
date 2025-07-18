import SignOutButton from '@/components/SignOutButton';
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
      <nav className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
         <Image 
              src="/logo.svg" 
              alt="MockMate Logo" 
              width={38}  
              height={32} 
          />
          <h2 className="text-primary-100">InterPrep</h2>

        </Link>

        <SignOutButton/>
      </nav>

      {children}
    </div>
  )
}

export default RootLayout
