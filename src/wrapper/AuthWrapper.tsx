import { useUser } from '@auth0/nextjs-auth0/client'
import { ReactNode } from 'react'
import FallbackSpinner from 'src/@core/components/spinner'

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { error, isLoading, user } = useUser()

  console.log(user)

  if (isLoading) return <FallbackSpinner />
  if (error) return <div>{error.message}</div>

  return <>{children}</>
}
