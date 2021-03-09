

import { AxiosRequestConfig } from 'axios'
import AxiosAPI from './_axios-api'


export const makePostRequest = (url: string, data?: any, config?: AxiosRequestConfig | undefined) => AxiosAPI.post(url, data, config)
export const makePutRequest = (url: string, data?: any, config?: AxiosRequestConfig | undefined) => AxiosAPI.put(url, data, config)
export const makeDeleteRequest = (url: string, data?: any, config?: AxiosRequestConfig | undefined) => AxiosAPI.delete(url, config)
export const makeGetRequest = (url: string, data?: any, config?: AxiosRequestConfig | undefined) => AxiosAPI.get(url, config)

