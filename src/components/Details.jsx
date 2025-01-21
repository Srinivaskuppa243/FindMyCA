import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [accountant, setAccountant] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAccountant = async () => {
            const response = await fetch(`http://localhost:5003/accountant/${id}`);
            const data = await response.json();
            setAccountant(data);
        };
        fetchAccountant();
    }, [id]);

    if (!accountant) return <div>Loading...</div>;

    return (
        <div className="container mx-auto my-4 flex flex-col items-center justify-center min-h-screen max-w-lg px-4 py-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center">{accountant.name}</h1>
            <img src={accountant.image} alt={accountant.name} className="rounded-full mt-4 w-32 h-32 object-cover" />
            <div className='text-center text-md'>
                <p>{accountant.intro}</p>

                <h2 className="text-xl text-left mt-4"><strong>About</strong></h2>
                <p>{accountant.about.description}</p>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-left flex-1">
                        <h3 className="mt-4 text-xl font-semibold">Services Offered:</h3>
                        <ul className="list-disc list-inside pl-5 text-left">
                            {accountant.about.services.map((service, index) => (
                                <li key={index} className="text-md text-gray-700 mb-2 hover:text-blue-600 transition-colors duration-200">{service}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-left flex-1">
                        <h3 className="mt-4 text-xl font-semibold">Benefits:</h3>
                        <ul className="list-disc list-inside pl-5">
                            {accountant.about.benefits.map((benefit, index) => (
                                <li className="text-md text-gray-700 mb-2 hover:text-blue-600 transition-colors duration-200">{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='text-left text-xl mt-2'>
                    <p><strong>Rating:</strong> {accountant.rating}⭐️ ({accountant.reviewCount} reviews)</p>
                    <p><strong>Price:</strong> {accountant.price}</p>
                    <p><strong>Delivery Time:</strong> {accountant.deliveryTime}</p>
                </div>
                <h3 className="text-left text-xl mt-4"><strong>Testimonial:</strong></h3>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-sm">
                    "{accountant.testimonial.text}" - <strong>{accountant.testimonial.author}</strong>
                </blockquote>
                <button className='bg-black text-white px-4 py-2 rounded text-md mx-1'>Reach Out</button>
                <button onClick={() => navigate('/accountant')} className="bg-black text-white px-4 py-2 mt-4 rounded text-md">Back</button>
            </div>
        </div>

    );
};

export default Details;