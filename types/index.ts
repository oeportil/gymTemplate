export type Toptions = {
    type: "warning" | "success" | "error";
    content: string;
}

export type apiTpost = {
    errorfun: (options: Toptions) => void,
    data: unknown
}

export type apiTpatch = {
    errorfun: (options: Toptions) => void,
    data: unknown,
    id: number | string
}

export type apiTdelete = {
    errorfun: (options: Toptions) => void,
    id: number | string
}

export type apiTpag = {
    errorfun: (options: Toptions) => void,
    totalCount?: number
} & Tpagination

export type TPagination = {
    page: number,
    limit: number,
    totalCount: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
}


export type Tpagination = {
    page: number,
    limit: number,
    search: string,
}

export interface IGym {
    id: number,
    name: string,
    logo: string,
    phone: string,
    planId: number,
    status: boolean,
    createdAt: string,
    updatedAt: string,
    deleted: boolean
    plan: IPlanG
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    slug: string
}

interface IPlanG {
    id: number,
    name: string
}

export interface IPlan extends IPlanG {
    cost: number,
    administration: boolean,
    posEnabled: boolean,
    billingEnabled: boolean,
    statisticsEnabled: boolean,
    maxUsers: number,
    maxClients: number,
    maxProducts: number,
    _count: {
        gyms: number
    }
}

export interface ICustomer {
    id: number,
    username: string,
    email: string,
    status: boolean,
    createdAt: string,
    updatedAt: string,
    role: IRol,
    gym: IGym
    code: string
}

export interface IPermission {
    id: number;
    module: string;
    action: "CREATE" | "EDIT" | "DELETE" | "VIEW";
}

export interface IRol {
    id: number
    name: string
    description: string
    isSystem: boolean
    permissions?: IPermission[]
}

export interface IPermission {
    id: number
    module: string
    action: "CREATE" | "EDIT" | "DELETE" | "VIEW"
}

export interface IUserAuth {
    email: string,
    id: number,
    name: string,
    role: Omit<IRol, "isSystem" | "description">
    gym: IGym
}


export interface Employee {
    id: number;
    username: string;
    email: string;
    roleId: number;
    status: boolean;
    createdAt: string;
    role: IRol;
}

export interface ISubscription {
    id: number;
    name: string;
    daysQuantity: number;
    cost: number;
    gymId: number;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
}

export interface IPayment {
    id: number;
    clientId: number;
    subscriptionId: number;
    amount: string;
    status: string;
    method: string;
    paymentDate: string;
    dueDate: string;
}

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    deleted: boolean;
    gymId: number;
    subscriptionId: number;
    subscription: ISubscription;
    payments: IPayment[]
}
