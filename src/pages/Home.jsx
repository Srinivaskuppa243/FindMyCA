import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="home flex justify-center items-center p-3 h-screen">
                <div className="text-center p-2">
                    <p className='text-4xl text-white'>
                        Take Expert Financial Advice Now
                    </p>
                    <button className="mt-2 bg-blue-600 text-xl text-white p-2 rounded-md" onClick={()=>navigate('/accountant')}>Contact us!!</button>
                </div>
            </div>
            <div className="px-6 py-8 bg-gray-50">
                <p className="text-lg sm:text-xl text-center mb-6">
                   <h1 className='text-4xl'><strong>Welcome to FindMyCA</strong></h1>
                    🌟 Simplify Your Finances, Maximize Your Success🌟
                </p>
                <p className="text-md sm:text-lg text-start mb-6">
                    Whether you're a growing business, an entrepreneur, or an individual seeking expert financial guidance, we've got you covered.
                </p>
                <p className="text-md sm:text-lg text-start mb-6">
                    ✅ Tax Planning & Filing - Save time and money with seamless compliance.<br />
                    ✅ Business Advisory - Tailored strategies to grow your business.<br />
                    ✅ Audit & Assurance - Build trust and transparency with thorough assessments.<br />
                    ✅ Wealth Management - Secure your future with sound financial advice.
                </p>
                <p className="text-md sm:text-lg text-start mb-6">
                    With a curated list of professionals, transparent pricing, and personalized solutions, managing your finances has never been this easy.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="px-6 py-8 ">
                <p className="sm:text-4xl text-5xl font-semibold text-center mt-4 mb-6">Why Choose Us?</p>
                <ul className="list-disc pl-6 text-2xl sm:pl-12 mb-6 sm:text-xl">
                    <li>Verified and Trusted Experts</li>
                    <li>Affordable and Flexible Packages</li>
                    <li>Fast Turnaround Times</li>
                </ul>
            </div>
        </div>
    )
}

export default Home
