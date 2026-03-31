import { getBase } from "./bases/base.service";

export const getApiProducts = async ({ limit, page, search, errorfun = () => { } }: { limit: number, page: number, search: string, errorfun: () => void }) => {
    return await getBase({ limit, page, search, errorfun }, "/cl/products/1");
};