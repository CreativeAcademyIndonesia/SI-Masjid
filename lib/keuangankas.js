import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url)
    return res.json();
}

export const useKeuanganKas = () => {
    const url = "http://localhost:3000/api/keuangankas";
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

    return { data, error }
}