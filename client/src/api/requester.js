async function requester(method, url, data) {
    const options = {};

    if (url.includes('login') || url.includes('register')) {
        localStorage.removeItem('accessToken'); 
    }

    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);
    

    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        }
    }

    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        }
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        throw result;

    }

    return result;
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
};