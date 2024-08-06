import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/furnitures'

const getAll = async () => {
    const result = await request.get(BASE_URL);

    const furniture = Object.values(result);

    return furniture;
};

const getOne = (furnitureId) => request.get(`${BASE_URL}/${furnitureId}`);

const create = (furnitureData) => request.post(`${BASE_URL}`, furnitureData);

const update = (furnitureId, updatedData) => request.put(`${BASE_URL}/${furnitureId}`, updatedData);

const del = (furnitureId) => request.del(`${BASE_URL}/${furnitureId}`);

const furnitureAPI = {
    getAll,
    getOne,
    create,
    update,
    del
};

export default furnitureAPI;


