export interface IResponseApi<T extends Record<string, unknown>> {
    status: number
    message: string
    data: T
}
