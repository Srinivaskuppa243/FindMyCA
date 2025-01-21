import React from 'react';

const About = () => {
    return (
        <div className="py-12 px-6">
            <div className="container mx-auto ">
                <h1 className="text-center text-4xl sm:text-5xl font-bold text-black mb-8">
                    About Us
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-12 mx-auto leading-relaxed">
                    At FindMyCA, we're on a mission to simplify financial management for individuals and businesses
                    by connecting them with expert financial advisors. Whether you need help with tax planning, business 
                    strategies, audits, or wealth management, we've got you covered. Our curated list of trusted 
                    professionals is dedicated to providing you with personalized solutions, transparent pricing, and 
                    exceptional customer service.
                </p>
            </div>

            <div className="container mx-auto  mb-12">
                <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-6">
                    Our Mission
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                    Our goal is to help you achieve financial peace of mind. By partnering with experienced professionals, 
                    we make managing your finances easier and more efficient. We believe in empowering you with the 
                    knowledge and tools needed to make informed financial decisions. Our mission is simple: to maximize 
                    your success through expert financial advice.
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg py-8 px-6 text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
                    What Sets Us Apart?
                    </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-black mb-4">Expert Advisors</h3>
                        <p className="text-lg text-gray-700">
                            Our team consists of highly qualified and trusted experts in finance, tax, business advisory, and wealth management.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-black mb-4">Tailored Solutions</h3>
                        <p className="text-lg text-gray-700">
                            We understand that every client's needs are unique. We offer personalized solutions tailored to your financial goals.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-black mb-4">Transparent Pricing</h3>
                        <p className="text-lg text-gray-700">
                            We believe in full transparency. No hidden fees, no surprises—just honest, upfront pricing for all our services.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
                    Meet the Team
                </h2>
                <div className="flex justify-center gap-8">
                    <div className="text-center">
                        <img src="src/assets/jd.jpeg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <p className="text-xl font-semibold text-black">John Doe</p>
                        <p className="text-gray-500">Chief Financial Advisor</p>
                    </div>
                    <div className="text-center">
                        <img src="../src/assets/js.jpeg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <p className="text-xl font-semibold text-black">Jane Smith</p>
                        <p className="text-gray-500">Lead Business Consultant</p>
                    </div>
                    <div className="text-center">
                        <img src="../src/assets/aj.jpeg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4"/>
                        <p className="text-xl font-semibold text-black">Alice Johnson</p>
                        <p className="text-gray-500">Senior Wealth Advisor</p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    At FindMyCA, we are passionate about helping individuals and businesses achieve financial success. 
                    Join us today and let's build a secure financial future together!
                </p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg text-xl mt-4 hover:bg-blue-700 transition-all">
                    Get Started Today
                </button>
            </div>
        </div>
    );
};

export default About;

