import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import LoginForm from "@/components/LoginForm"
import Header from "@/components/Header"

const Login = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      navigate('/download')
    }
  }, [user, navigate])

  const handleLoginSuccess = () => {
    navigate('/download')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
        <div className="w-full max-w-md">
          <LoginForm onSuccess={handleLoginSuccess} />
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account? Contact our support team to get access.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login