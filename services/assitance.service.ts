import { getBase, postBase } from "./bases/base.service";

export const getApiAssistance = async () => {
    return await getBase({ limit: 10, page: 1, search: "", errorfun: () => { } }, "/cl/assistance/1");
};

export const postApiAssistance = async (data: any) => {
    return await postBase({ data, errorfun: () => { } }, "/cl/assistance/1");
};