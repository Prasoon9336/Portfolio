import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) {
            setData(null);
            return;
        }

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            })
            .then((responseData) => {
                setData(responseData);
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setData(null);
            });
    }, [url]);

    return data;
}

export default useFetch 