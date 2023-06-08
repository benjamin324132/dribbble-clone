export interface Shot {
    _id: string;
    img: string;
    name: string;
    description?: string;
    userAvatar?: string;
    userName: string;
    userId: string;
    likeCount?: number;
    viewCount?: number;
}