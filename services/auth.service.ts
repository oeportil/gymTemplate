import { postBase } from "./bases/base.service";


export const loginApi = async ({ email, code }: { email: string, code: string }) => {
    return await postBase({ data: { email, code }, errorfun: () => { } }, "/cl/login/1");
}