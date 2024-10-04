export interface SinglePostIn {
    params: {
        id: number
    }
}

export interface UserIn {
    id: number,
    name: string,
    username: string;
    email: string
}