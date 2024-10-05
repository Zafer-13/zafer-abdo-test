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

export interface PostIn {
    id: number;
    title: string
}

export interface PostsIn {
    initialPosts: PostIn[]
}

export interface ProductIn  {
    id: number;
    category: string;
    description: string;
    price: number
}