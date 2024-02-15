import {useEffect, useState} from "react";

function useFetch(url: string) {

    const [data, setData] = useState<any>(null)

    useEffect(() => {
        fetch(url).then((response) => response.json())
            .then((json) => setData(json))
    }, [url])

    return data
}

export default useFetch