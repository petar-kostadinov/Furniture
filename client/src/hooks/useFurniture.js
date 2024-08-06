import { useState, useEffect, useCallback } from "react";

import furnitureAPI from "../api/furniture-api";

export function useGetAllFurnitures() {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await furnitureAPI.getAll();

            setFurnitures(result);
        })();
    }, []);

    return [furnitures, setFurnitures];
}

export function useGetOneFurniture(furnitureId) {
    const [furniture, setFurniture] = useState({});

    useEffect(() => {
        (async () => {
            const result = await furnitureAPI.getOne(furnitureId);

            setFurniture(result)
        })();
    }, [furnitureId]);

    return [
        furniture,
        setFurniture
    ];
}

export function useCreateProduct() {
    const createProductHandler = (productData) => furnitureAPI.create(productData);

    return createProductHandler;
}

export function useUpdateProduct() {
    const updateProductHandler = useCallback(async (furnitureId, productData) => {
        try {
            await furnitureAPI.update(furnitureId, productData);
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    }, []);

    return updateProductHandler;
}

export function useDeleteProduct() {
    const deleteProductHandler = useCallback(async (furnitureId) => {
        try {
            await furnitureAPI.del(furnitureId);
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    }, []);

    return deleteProductHandler;
}

export function useGetLast() {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await furnitureAPI.getLast();

            setFurnitures(result);
        })();
    }, []);

    return [furnitures, setFurnitures];
}

