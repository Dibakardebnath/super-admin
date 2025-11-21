import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@crm/ui'
import { Button } from '@crm/ui'
import { Input } from '@crm/ui'
import { useState } from 'react'

export const Route = createFileRoute('/auth/register')({
  component: () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                sign in to your existing account
              </a>
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6" onSubmit={(e: React.FormEvent) => {
              e.preventDefault()
              console.log('Register with:', { email, password, confirmPassword })
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                />
              </div>
              
              <div>
                <Button type="submit" className="w-full">
                  Create account
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