import { useState, useEffect } from 'react';

import Listing from './listing';

const Listings = ({ isHome = false }) => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchJobs = async () => {
            const apiUrl = isHome ?
                "http://localhost:8000/jobs?_limit=3" :
                "http://localhost:8000/jobs";
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
                setLoading(false);
            }
            catch (error) {
                console.log("Error fetching jobs", error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Featured Jobs' : 'Browse Jobs'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? <h2>Loading... </h2> : (
                        <>
                            {jobs.map((job) => (
                                <Listing key={job.id} job={job} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Listings
