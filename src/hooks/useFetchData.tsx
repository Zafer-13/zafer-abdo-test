import { useQuery } from '@tanstack/react-query';

const fetchData = async (url: string) => {
    const data  = await fetch(url);
    return data.json();
};

export const useFetchData = (url: string, value: string) => {
    return useQuery({
        queryKey: [value],
        queryFn: () => fetchData(url),
        staleTime: 5000,
        refetchOnWindowFocus: false
    });
};
