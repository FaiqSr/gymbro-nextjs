export type WebResponse<T> = {
    status: number;
    message: string;
    data?: T;
    error?: string;
};