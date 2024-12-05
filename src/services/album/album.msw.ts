/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * 5PIX BACKEND PROD
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
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  DataResponseAlbumItemResponse,
  DataResponseStr,
  PageAlbumItemResponse
} from '../../schemas'

export const getGetAlbumsGetResponseMock = (overrideResponse: Partial< PageAlbumItemResponse > = {}): PageAlbumItemResponse => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), data: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({album_image_url: faker.string.alpha(20), album_name: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, event_date: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.number.int({min: undefined, max: undefined}), is_find_all_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_face: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_metadata: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_highlight: faker.number.int({min: undefined, max: undefined}), total_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`})), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), metadata: {current_page: faker.number.int({min: undefined, max: undefined}), page_size: faker.number.int({min: undefined, max: undefined}), total_items: faker.number.int({min: undefined, max: undefined})}, ...overrideResponse})

export const getCreateAlbumsPostResponseMock = (overrideResponse: Partial< DataResponseAlbumItemResponse > = {}): DataResponseAlbumItemResponse => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), data: faker.helpers.arrayElement([{album_image_url: faker.string.alpha(20), album_name: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, event_date: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.number.int({min: undefined, max: undefined}), is_find_all_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_face: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_metadata: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_highlight: faker.number.int({min: undefined, max: undefined}), total_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`}, undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), ...overrideResponse})

export const getDetailAlbumsAlbumIdGetResponseMock = (overrideResponse: Partial< DataResponseAlbumItemResponse > = {}): DataResponseAlbumItemResponse => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), data: faker.helpers.arrayElement([{album_image_url: faker.string.alpha(20), album_name: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, event_date: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.number.int({min: undefined, max: undefined}), is_find_all_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_face: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_metadata: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_highlight: faker.number.int({min: undefined, max: undefined}), total_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`}, undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), ...overrideResponse})

export const getUpdateAlbumsAlbumIdPutResponseMock = (overrideResponse: Partial< DataResponseAlbumItemResponse > = {}): DataResponseAlbumItemResponse => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), data: faker.helpers.arrayElement([{album_image_url: faker.string.alpha(20), album_name: faker.string.alpha(20), created_at: `${faker.date.past().toISOString().split('.')[0]}Z`, event_date: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.number.int({min: undefined, max: undefined}), is_find_all_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_face: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_find_by_metadata: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), is_highlight: faker.number.int({min: undefined, max: undefined}), total_image: faker.helpers.arrayElement([faker.number.int({min: undefined, max: undefined}), undefined]), updated_at: `${faker.date.past().toISOString().split('.')[0]}Z`}, undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), ...overrideResponse})

export const getProcessImageAlbumsAlbumIdProcessImagePutResponseMock = (overrideResponse: Partial< DataResponseStr > = {}): DataResponseStr => ({code: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), data: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), message: faker.helpers.arrayElement([faker.string.alpha(20), undefined]), ...overrideResponse})


export const getGetAlbumsGetMockHandler = (overrideResponse?: PageAlbumItemResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<PageAlbumItemResponse> | PageAlbumItemResponse)) => {
  return http.get('*/albums', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetAlbumsGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getCreateAlbumsPostMockHandler = (overrideResponse?: DataResponseAlbumItemResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<DataResponseAlbumItemResponse> | DataResponseAlbumItemResponse)) => {
  return http.post('*/albums', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getCreateAlbumsPostResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getDetailAlbumsAlbumIdGetMockHandler = (overrideResponse?: DataResponseAlbumItemResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<DataResponseAlbumItemResponse> | DataResponseAlbumItemResponse)) => {
  return http.get('*/albums/:albumId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getDetailAlbumsAlbumIdGetResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getUpdateAlbumsAlbumIdPutMockHandler = (overrideResponse?: DataResponseAlbumItemResponse | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<DataResponseAlbumItemResponse> | DataResponseAlbumItemResponse)) => {
  return http.put('*/albums/:albumId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getUpdateAlbumsAlbumIdPutResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getProcessImageAlbumsAlbumIdProcessImagePutMockHandler = (overrideResponse?: DataResponseStr | ((info: Parameters<Parameters<typeof http.put>[1]>[0]) => Promise<DataResponseStr> | DataResponseStr)) => {
  return http.put('*/albums/:albumId/process-image', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getProcessImageAlbumsAlbumIdProcessImagePutResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getAlbumMock = () => [
  getGetAlbumsGetMockHandler(),
  getCreateAlbumsPostMockHandler(),
  getDetailAlbumsAlbumIdGetMockHandler(),
  getUpdateAlbumsAlbumIdPutMockHandler(),
  getProcessImageAlbumsAlbumIdProcessImagePutMockHandler()
]
