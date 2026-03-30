import { postBase } from "./bases/base.service";


export const loginApi = async ({ email, code }: { email: string, code: string }) => {
    return postBase({ data: { email, code }, errorfun: () => { } }, "/cl/login/1");
}