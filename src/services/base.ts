import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CancelTokenSource,
    InternalAxiosRequestConfig,
} from 'axios'

type RequestInterceptor = (
    config: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig

type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse

interface IHTTPClient {
    createInstance(options: AxiosRequestConfig): AxiosInstance
    setRequestInterpector(requestInterceptor: RequestInterceptor): void
    setResponseInterpector(responseInterceptor: ResponseInterceptor): void
    cancelRequest(): void
}

/**
 * A base class for creating HTTP client instances and API service classes.
 * Provides a foundation for making API requests using Axios.
 */
abstract class HTTPClient implements IHTTPClient {
    protected instance: AxiosInstance | undefined
    private axiosToken: CancelTokenSource | undefined

    createInstance(options: AxiosRequestConfig): AxiosInstance {
        this.axiosToken = axios.CancelToken.source()
        this.instance = axios.create({
            ...options,
            cancelToken: this.axiosToken?.token,
        })

        return this.instance
    }

    setRequestInterpector(requestInterceptor: RequestInterceptor) {
        this.instance?.interceptors.request.use(requestInterceptor)
    }

    setResponseInterpector(responseInterceptor: ResponseInterceptor) {
        this.instance?.interceptors.response.use(responseInterceptor)
    }

    cancelRequest() {
        this.axiosToken?.cancel()
    }
}

export interface IResponseApi<T> {
    status: number
    message: string
    data: T
}

interface IHTTPMethodAdapter<T> {
    get(id: any): Promise<IResponseApi<T>>
    getMany(): Promise<IResponseApi<T>[]>
    create(data: any): Promise<IResponseApi<T>>
    update(id: any, data: T): Promise<IResponseApi<T>>
    delete(id: any): Promise<IResponseApi<T>>
}

/**
 * A base class for API service classes that perform CRUD operations.
 * Subclasses can extend this class to implement specific APIs.
 */
export abstract class BaseApiService<T>
    extends HTTPClient
    implements IHTTPMethodAdapter<T>
{
    protected client: AxiosInstance
    protected context: string | undefined

    constructor(params: AxiosRequestConfig) {
        super()
        this.client = this.createInstance(params)
    }
    async get(id: any): Promise<IResponseApi<T>> {
        throw new Error('Method not implemented.')
    }
    getMany(): Promise<IResponseApi<T>[]> {
        throw new Error('Method not implemented.')
    }
    create(data: any): Promise<IResponseApi<T>> {
        throw new Error('Method not implemented.')
    }
    update(id: any, data: T): Promise<IResponseApi<T>> {
        throw new Error('Method not implemented.')
    }
    delete(id: any): Promise<IResponseApi<T>> {
        throw new Error('Method not implemented.')
    }
}
