const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result.user;
};

export const createUser = async (userData) => {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { country, city, street, streetNumber };
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();

    return result.user;
};
