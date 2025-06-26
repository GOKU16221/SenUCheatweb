import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase, User } from '@/lib/supabase'

interface AuthContextType {
  user: User | null
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('senu_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        localStorage.removeItem('senu_user')
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true)
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()

      if (error || !data) {
        return { success: false, error: 'Invalid username or password' }
      }

      // Check if user is banned
      if (data.banned) {
        return { success: false, error: 'Your account has been banned' }
      }

      // Check if admin approval is required
      if (!data.admin_approval) {
        return { success: false, error: 'Your account is pending admin approval' }
      }

      // Check if subscription is expired
      if (data.expiredate) {
        const expireDate = new Date(data.expiredate)
        const currentDate = new Date()
        if (expireDate < currentDate) {
          return { success: false, error: 'Your subscription has expired' }
        }
      }

      setUser(data)
      localStorage.setItem('senu_user', JSON.stringify(data))
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'An error occurred during login' }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('senu_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}