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

export interface User {
    _id: string;
    name: string;
    email: string;
  }
  