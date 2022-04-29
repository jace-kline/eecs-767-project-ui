import React, {useState, useEffect} from 'react';

export default function useAsync(promiseFn, deps) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    function execute() {
        setLoading(true);
        promiseFn()
        .then(res => { setData(res) })
        .catch(err => { setError(err) })
        .finally(() => { setLoading(false) })
    }

    useEffect(() => {
        execute()
    }, deps);

    return { loading, error, data };
}