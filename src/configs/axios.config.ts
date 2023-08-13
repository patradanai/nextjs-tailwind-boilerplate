import axios from 'axios'

import { env } from '@/utils/env'

const cancelTokenSource = axios.CancelToken.source()

const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL,
    timeout: env.NEXT_PUBLIC_API_TIMEOUT,
    cancelToken: cancelTokenSource.token,
})

export { instance, cancelTokenSource }
