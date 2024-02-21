import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAllGames = async () => {
    const result = await request.get(baseUrl);
    const games = Object.values(result);

    return games;
};

export const getGameById = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
};

export const createGame = async (gameData) => {
    const result = await request.post(baseUrl, gameData);

    return result;
};
