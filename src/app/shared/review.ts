
export interface Review {
    date: Date;
    likes: any; // possibly could do with making a class for likes - to strore the uid(person who commented) and date
    movieID: string;
    rating: number;
    tags: any;
    content: string;
    title: string;
    comments: any; // possibly could do with making a class for comment - to strore the uid(person who commented), date and content
}
