import React from 'react'
// import { Link } from "react-router-dom";

const SignIn = () => {
  return (
  <div className="min-h-[88vh] flex items-center justify-center">

      <div className="w-full max-w-md border-1 p-20 px-10 rounded-xl">
        <h2 className="text-3xl font-bold pb-8">Login to Swiggy</h2>

        <form className="space-y-6">
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input type="tel" required placeholder="Enter your phone number" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" required placeholder="••••••••" className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>

          <div>
            <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">Login</button>
        </form>

        <p className="text-center text-sm text-gray-600 pt-8">
          Don’t have an account? <a href="#" className="text-orange-500 hover:underline">Sign up</a>
        </p>
      </div>
    
  </div>

  )
}

export default SignIn