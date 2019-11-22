import { UserInfo } from './user-info';
import { Comment } from './comment';
import { Reaction } from './reaction';

export interface User {
    user: UserInfo,
    date: any,
    text: string,
    reactions?: Reaction[],
    comments?: Comment[]
}
