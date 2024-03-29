import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const create = async (data) => {
    const result = await request.post(baseUrl, data);

    return result;
};

export const getAll = async (gameId) => {
    const query = encodeURIComponent(`gameId="${gameId}"`);
    console.log(`${baseUrl}?where=${query}`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    const comments = Object.values(result);

    return comments;
};
