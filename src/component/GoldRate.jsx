import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GoldRate = () => {
    const [rates, setRates] = useState({ gold: 0, silver: 0 });
    const [error, setError] = useState('');

    const fetchRates = async () => {
        try {
            // Use the environment variable for the API URL
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/rates`);
            setRates(response.data);
            setError(''); // Clear any previous errors
        } catch (error) {
            setError('Error fetching rates.');
        }
    };

    useEffect(() => {
        fetchRates(); // Fetch rates initially
        const interval = setInterval(fetchRates, 60000); // Refresh rates every 60 seconds

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);

    return (
        <div>
            <h1>Current Gold and Silver Rates</h1>
            {error && <p>{error}</p>}
            <p>Gold Rate: ₹{rates.gold}</p>
            <p>Silver Rate: ₹{rates.silver}</p>
        </div>
    );
};

export default GoldRate;
