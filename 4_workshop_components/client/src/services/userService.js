const baseUrl = 'http://localhost:3005/api/users';
export const getAll = async ({
    sort,
    order,
    search,
    criteria,
    limit,
    page
}) => {
    let query = `${baseUrl}?`;

    if (sort) {
        query += `sort=${sort}&`;
    }
    if (order) {
        query += `order=${order}&`;
    }
    if (criteria && search) {
        query += `criteria=${criteria}&`;
        query += `search=${search}&`;
    }
    if (limit) {
        query += `limit=${limit}&`;
    }
    if (page) {
        query += `page=${page}&`;
    }
    const response = await fetch(query);

    if (response.ok) {
        let result = await response.json();
        result.pages = Math.ceil(result.count / limit);

        return result;
    } else {
        throw new Error(await response.json());
    }
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);

    if (response.ok) {
        const result = await response.json();

        return result.user;
    } else {
        throw new Error(await response.json());
    }
};

export const createUser = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { country, city, street, streetNumber };
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        const result = await response.json();

        return result.user;
    } else {
        throw new Error(await response.json());
    }
};

export const updateUser = async (userId, userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { country, city, street, streetNumber };
    const response = await fetch(`${baseUrl}/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const result = await response.json();

        return result.user;
    } else {
        throw new Error(await response.json());
    }
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`, { method: 'DELETE' });

    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw new Error(await response.json());
    }
};
