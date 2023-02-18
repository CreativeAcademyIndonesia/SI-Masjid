import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url)
    return res.json();
}

export const useDailyJadwalsholat = () => {
    const url = "http://localhost:3000/api/datadailyjadwalsholat";
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error }
}

export const useMonthlyJadwalsholat = () => {
    const url = "http://localhost:3000/api/datamonthlyjadwalsholat";
    const monthly = useSWR(url, fetcher, { refreshInterval: 1000 });

    return {monthly}
}

