/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * 5PIX BACKEND
 * 
        Base frame with FastAPI micro framework + Postgresql
            - Login/Register with JWT
            - Permission
            - CRUD User
            - Unit testing with Pytest
            - Dockerize
        
 * OpenAPI spec version: 0.1.0
 */
import { useQuery } from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

import type {
  DataResponseAlbumItemResponsePublic,
  GetPubAlbumsGetParams,
  HTTPValidationError,
  PageAlbumItemResponsePublic,
} from '../../schemas'

/**
 * API Public Get list Album
- highlight: bool = False (default) - Get list album highlight thì set True
 * @summary Get
 */
export const getPubAlbumsGet = (
  params?: GetPubAlbumsGetParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<PageAlbumItemResponsePublic>> => {
  return axios.get(`http://54.254.67.146:8000/pub/albums`, {
    ...options,
    params: { ...params, ...options?.params },
  })
}

export const getGetPubAlbumsGetQueryKey = (params?: GetPubAlbumsGetParams) => {
  return [`http://54.254.67.146:8000/pub/albums`, ...(params ? [params] : [])] as const
}

export const getGetPubAlbumsGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getPubAlbumsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetPubAlbumsGetParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>>
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPubAlbumsGetQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPubAlbumsGet>>> = ({ signal }) =>
    getPubAlbumsGet(params, { signal, ...axiosOptions })

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPubAlbumsGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type GetPubAlbumsGetQueryResult = NonNullable<Awaited<ReturnType<typeof getPubAlbumsGet>>>
export type GetPubAlbumsGetQueryError = AxiosError<HTTPValidationError>

export function useGetPubAlbumsGet<
  TData = Awaited<ReturnType<typeof getPubAlbumsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params: undefined | GetPubAlbumsGetParams,
  options: {
    query: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>> &
      Pick<
        DefinedInitialDataOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>,
        'initialData'
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPubAlbumsGet<
  TData = Awaited<ReturnType<typeof getPubAlbumsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetPubAlbumsGetParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>> &
      Pick<
        UndefinedInitialDataOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>,
        'initialData'
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetPubAlbumsGet<
  TData = Awaited<ReturnType<typeof getPubAlbumsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetPubAlbumsGetParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>>
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Get
 */

export function useGetPubAlbumsGet<
  TData = Awaited<ReturnType<typeof getPubAlbumsGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  params?: GetPubAlbumsGetParams,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPubAlbumsGet>>, TError, TData>>
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getGetPubAlbumsGetQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * API Detail Album
 * @summary Detail
 */
export const detailPubAlbumsAlbumIdGet = (
  albumId: number,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<DataResponseAlbumItemResponsePublic>> => {
  return axios.get(`http://54.254.67.146:8000/pub/albums/${albumId}`, options)
}

export const getDetailPubAlbumsAlbumIdGetQueryKey = (albumId: number) => {
  return [`http://54.254.67.146:8000/pub/albums/${albumId}`] as const
}

export const getDetailPubAlbumsAlbumIdGetQueryOptions = <
  TData = Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  albumId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getDetailPubAlbumsAlbumIdGetQueryKey(albumId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>> = ({
    signal,
  }) => detailPubAlbumsAlbumIdGet(albumId, { signal, ...axiosOptions })

  return { queryKey, queryFn, enabled: !!albumId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData> }
}

export type DetailPubAlbumsAlbumIdGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>
>
export type DetailPubAlbumsAlbumIdGetQueryError = AxiosError<HTTPValidationError>

export function useDetailPubAlbumsAlbumIdGet<
  TData = Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  albumId: number,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
          TError,
          TData
        >,
        'initialData'
      >
    axios?: AxiosRequestConfig
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useDetailPubAlbumsAlbumIdGet<
  TData = Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  albumId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
          TError,
          TData
        >,
        'initialData'
      >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useDetailPubAlbumsAlbumIdGet<
  TData = Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  albumId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
/**
 * @summary Detail
 */

export function useDetailPubAlbumsAlbumIdGet<
  TData = Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>,
  TError = AxiosError<HTTPValidationError>,
>(
  albumId: number,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof detailPubAlbumsAlbumIdGet>>, TError, TData>
    >
    axios?: AxiosRequestConfig
  },
): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {
  const queryOptions = getDetailPubAlbumsAlbumIdGetQueryOptions(albumId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData>
  }

  query.queryKey = queryOptions.queryKey

  return query
}
