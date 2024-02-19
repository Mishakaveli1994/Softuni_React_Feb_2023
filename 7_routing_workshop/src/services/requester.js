const request = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    return result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');
