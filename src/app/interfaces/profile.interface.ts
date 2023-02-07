// TODO: consider ProfileExtended for about and ProfileList for description
export interface Profile {
    id: number;
    fullName: string;
    createdAt: string; // TODO: consider date
    position: string;
    description?: string;
    about?: string;
}