import { getBase } from "./bases/base.service";

export const getApiPayments = async () => {
    return await getBase({ limit: 10, page: 1, search: "", errorfun: () => { } }, "/cl/payments/1");
};