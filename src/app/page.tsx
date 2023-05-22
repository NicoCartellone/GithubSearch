"use client"

import FormSearchUser from '@/components/FormSearchUser'
import UserCardInfo from '@/components/UserCardInfo'
import { useState } from 'react'
import { User } from '@/interfaces/user'

const Home = () => {
  const [user, setUser] = useState<User | null>(null)
  const [error , setError] = useState<string | null>(null)

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await res.json()
    if(!res.ok){
      setUser(null)
      setError("Usuario no encontrado")
      return
    }
    setUser(data)
    setError(null)
  }

  return (
    <>
      <FormSearchUser getUser={getUser}/>
      {user && <UserCardInfo user={user}/>}
      {
        error && (
          <div className='p-4 text-center text-white bg-red-500 rounded-xl'>{error}</div>
        )
      }
    </>
  )
}
export default Home