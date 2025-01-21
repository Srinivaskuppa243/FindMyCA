import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="home relative flex justify-end items-center p-3 h-screen">
        <div className="absolute inset-0 bg-blue-500 bg-opacity-30"></div>
        <div className="relative text-center text-white p-2">
          <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Welcome to FindMyCA</h1>
          <div className='text-2xl sm:text-3xl mb-6 '>
            <p>Simplify Your Finances, Maximize Your Success</p>
            <p>Take Expert Descision Now</p>
          </div>
          <button className="mt-2 hover:bg-blue-700 focus:outline-none bg-blue-600 text-xl text-white p-2 rounded-md" onClick={() => navigate('/accountant')}>Check Out!!</button>
        </div>
      </div>
      <div className="px-6 py-12 rounded-lg">
        <h2 className="text-5xl sm:text-4xl font-semibold text-center text-black-600 mb-8">
          Why Choose Us?
        </h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-6 leading-relaxed">
          Whether you're a growing business, an entrepreneur, or an individual seeking expert financial guidance, we've got you covered.
        </p>
        <div className="bg-white shadow-sm p-6 rounded-lg">
          <ul className="list-none space-y-4">
            <li className="flex items-start">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <p className="text-md sm:text-lg text-gray-700">
                <span className="font-bold text-black">Tax Planning & Filing:</span> Save time and money with seamless compliance.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <p className="text-md sm:text-lg text-gray-700">
                <span className="font-bold text-black">Business Advisory:</span> Tailored strategies to grow your business.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <p className="text-md sm:text-lg text-gray-700">
                <span className="font-bold text-black">Audit & Assurance:</span> Build trust and transparency with thorough assessments.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 text-2xl mr-4">✅</span>
              <p className="text-md sm:text-lg text-gray-700">
                <span className="font-bold text-black">Wealth Management:</span> Secure your future with sound financial advice.
              </p>
            </li>
          </ul>
        </div>
        <p className="text-lg sm:text-xl text-gray-800 mt-8 leading-relaxed">
          With a curated list of professionals, transparent pricing, and personalized solutions, managing your finances has never been this easy.
        </p>
        <button className="mt-2 hover:bg-blue-700 focus:outline-none bg-blue-600 text-xl text-white p-2 rounded-md" onClick={() => navigate('/about')}>Read more!!</button>
      </div>
      {/* Why Choose Us Section */}
      <div className="px-6 py-8 ">
        <p className="sm:text-4xl text-5xl font-semibold text-center mt-4 mb-6">What our Users say? </p>
        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Card 1 */}
          <div className="bg-white border rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-bold text-lg">John Doe</p>
                <p className="text-sm text-gray-500">Verified User</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              "Amazing service! The experts are knowledgeable, and the process is
              seamless."
            </p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-bold text-lg">Jane Smith</p>
                <p className="text-sm text-gray-500">Satisfied Customer</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              "Affordable and flexible packages. I highly recommend this service!"
            </p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="ml-4">
                <p className="font-bold text-lg">Alice Johnson</p>
                <p className="text-sm text-gray-500">Happy Client</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-4">
              "Fast turnaround times and excellent quality work. Truly a pleasure!"
            </p>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
