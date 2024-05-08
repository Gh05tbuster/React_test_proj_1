import { API_URL } from './constants';

export async function fetchData(url) {
    const res = await fetch(`${API_URL}${url}`);
    const json = await res.json();
    return json;
}