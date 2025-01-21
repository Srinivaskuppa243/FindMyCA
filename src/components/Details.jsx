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
        <div className="container mx-auto mt-4 flex flex-col items-center justify-center min-h-screen max-w-md px-4 py-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mt-4 text-center">{accountant.name}</h1>
            <img src={accountant.image} alt={accountant.name} className="rounded-full mt-4 w-32 h-32" />
            <div className='text-center text-md'>
                <p className="mt-2">{accountant.intro}</p>
                <p className="mt-2">Rating: {accountant.rating} ({accountant.reviewCount} reviews)</p>
                <p className="mt-2">Price: {accountant.price}</p>
                <p className="mt-2">Delivery Time: {accountant.deliveryTime}</p>
                <h2 className="mt-4"><strong>About</strong></h2>
                <p>{accountant.about.description}</p>
                <h3 className="mt-2"><strong>Services Offered:</strong></h3>
                <ul className="list-disc list-inside">
                    {accountant.about.services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
                <h3 className="mt-2"><strong>Benefits:</strong></h3>
                <ul className="list-disc list-inside">
                    {accountant.about.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul>
                <h3 className="mt-4"><strong>Testimonial:</strong></h3>
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-sm">
                    "{accountant.testimonial.text}" - <strong>{accountant.testimonial.author}</strong>
                </blockquote>
                <button onClick={() => navigate('/accountant')} className="bg-black text-white px-4 py-2 mt-4 rounded text-sm">Back</button>
            </div>
        </div>

    );
};

export default Details;