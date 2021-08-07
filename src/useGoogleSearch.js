import { useState, useEffect } from 'react'
import API_KEY from './keys'

const CONTEXT_API = "b1c6a87870d25f7e0"

const useGoogleSearch = (term) => {

    const [data, setData] = useState(null)

    useEffect(() => {

        async function fetchData() {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_API}&q=${term}`)
                .then(response => response.json())
                .then(result => setData(result))
        }

        fetchData();

    }, [term])
    return { data }

}

export default useGoogleSearch
