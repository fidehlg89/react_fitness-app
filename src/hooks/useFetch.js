import { useState, useEffect } from 'react'

const MOCK_DATA = [
    {
        id: "1",
        title: "Technique Guides",
        description: "Learn the amazing exercises picked by experts.",
        img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise.png?alt=media&token=7d490919-bbbb-453b-bd44-063074d251d1",
        leftColor: "#A74CF2",
        rightColor: "#617BFB"
    },
    {
        id: "2",
        title: "Stay Focused",
        description: "Consistency is key to seeing results. Keep going!",
        img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise02.png?alt=media&token=014d59bc-5b43-41a4-b09b-61019685a49c",
        leftColor: "#17ead9",
        rightColor: "#6078ea"
    },
    {
        id: "3",
        title: "Weight Loss",
        description: "Burn fat and feel better than ever.",
        img: "https://firebasestorage.googleapis.com/v0/b/react-course-eec7a.appspot.com/o/exercise03.png?alt=media&token=8e51c13e-721a-40dc-ad20-003a11c89227",
        leftColor: "#f093fb",
        rightColor: "#f5576c"
    }
];

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url);
                if (!res.ok) throw new Error('Network response was not ok');
                let data = await res.json();
                
                // Merge with localStorage if we want persistence (optional)
                const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
                setData([...data, ...localData]);
                setLoading(false);
            } catch (error) {
                console.warn("API not reachable, using mock data fallback.");
                // Fallback to mock data + localStorage
                const localData = JSON.parse(localStorage.getItem('fitness_exercises') || '[]');
                setData([...MOCK_DATA, ...localData]);
                setLoading(false);
            }
        }
        fetchResource()
    }, [url])

    return { data, loading, error, setData }
}

export default useFetch
