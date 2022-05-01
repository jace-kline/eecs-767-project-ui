import React, {useState, useEffect, useRef} from 'react';

export default function useAsync(promiseFn, deps, immediate=false) {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const didMount = useRef(immediate);

    function execute() {
        setError(false);
        setLoading(true);
        promiseFn()
        .then(res => { setData(res) })
        .catch(err => { setError(err) })
        .finally(() => { setLoading(false) })
    }

    useEffect(() => {
        if(didMount.current) execute()
        else didMount.current = true;
    }, deps);

    return { loading, error, data };
}