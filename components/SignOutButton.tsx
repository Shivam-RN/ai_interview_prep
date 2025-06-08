'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const SignOutButton = () => {
  const router = useRouter()

  const handleSignOut = async () => {
    await fetch('/api/sign-out', { method: 'POST' })
    toast.success('Signed out successfully')
    router.push('/sign-in')
  }

  return (
  <button
  onClick={handleSignOut}
  style={{ backgroundColor: '#16142F' }}
  className="group px-5 py-3 rounded-2xl text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
>
  <span className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 opacity-80 group-hover:opacity-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
      />
    </svg>
    Sign Out
  </span>
</button>

  )
}

export default SignOutButton
