import { useState, useEffect } from 'react';

type UseSearchResult<T> = {
    results: T[];
    loading: boolean;
    error: string | null;
};

const useSearch = <T = unknown>(url: string): UseSearchResult<T> => {
    const [results, setResults] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) {
            setResults([]);
            setError(null);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                const data = await res.json();
                setResults(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { results, loading, error };
};

export default useSearch;
