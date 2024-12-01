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
import {
  useMutation
} from '@tanstack/react-query'
import type {
  MutationFunction,
  UseMutationOptions,
  UseMutationResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  DataResponseUserItemResponse,
  HTTPValidationError,
  UserRegisterRequest
} from '../../schemas'



/**
 * @summary Register
 */
export const registerRegisterPost = (
    userRegisterRequest: UserRegisterRequest, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<DataResponseUserItemResponse>> => {
    
    return axios.post(
      `https://dapi.5pix.org/register`,
      userRegisterRequest,options
    );
  }



export const getRegisterRegisterPostMutationOptions = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerRegisterPost>>, TError,{data: UserRegisterRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof registerRegisterPost>>, TError,{data: UserRegisterRequest}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof registerRegisterPost>>, {data: UserRegisterRequest}> = (props) => {
          const {data} = props ?? {};

          return  registerRegisterPost(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type RegisterRegisterPostMutationResult = NonNullable<Awaited<ReturnType<typeof registerRegisterPost>>>
    export type RegisterRegisterPostMutationBody = UserRegisterRequest
    export type RegisterRegisterPostMutationError = AxiosError<HTTPValidationError>

    /**
 * @summary Register
 */
export const useRegisterRegisterPost = <TError = AxiosError<HTTPValidationError>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof registerRegisterPost>>, TError,{data: UserRegisterRequest}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof registerRegisterPost>>,
        TError,
        {data: UserRegisterRequest},
        TContext
      > => {

      const mutationOptions = getRegisterRegisterPostMutationOptions(options);

      return useMutation(mutationOptions);
    }
    