import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@crm/ui/Card'
import { Button } from '@crm/ui/Button'
import { Input } from '@crm/ui/Input'
import { useState } from 'react'

export const Route = createFileRoute('/auth/login')({
  component: () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                create a new account
              </a>
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault()
              console.log('Login with:', { email, password })
            }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              
              <div>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </div>
              
              <div className="text-center">
                <a href="/" className="text-sm text-indigo-600 hover:text-indigo-500">
                  Back to home
                </a>
              </div>
            </form>
          </Card>
        </div>
      </div>
    )
  },
})