import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results);
                setIsLoading(false)
            })
            .catch((err) => {
                setErr(err)
                setIsLoading(false)
            });

    }, [url]);

    return [data, setData, err, isLoading];
};

export default useFetch;