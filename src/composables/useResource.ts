import { ref, Ref } from 'vue'
import http from '../http-client'
import APIEndpoint, { APIError, APIResponse } from '../types'

const useResource = (endpoint: APIEndpoint) => {
    const response: Ref<APIResponse> = ref(null);
    const error: Ref<APIError> = ref(null)
    const loading = ref(true)
    
    http(endpoint)
    .then(res => {
        error.value = null;
        response.value = res;
    })
    .catch(err => error.value = err)
    .finally(() => {
        loading.value = false;
    })

    return {
        response,
        error,
        loading
    }
}

export default useResource;