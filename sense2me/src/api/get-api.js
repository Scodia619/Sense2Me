import { useEffect, useState } from "react";

function useRequest(){

    const [results, setResults] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_API, {mode: "cors"})
        .then(res => {
            return res.json()
        }).then(data => setResults(data))
    }, [])

    return results;

}



export default useRequest;