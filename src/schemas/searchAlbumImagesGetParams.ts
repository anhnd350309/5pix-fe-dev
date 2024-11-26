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
import type { ImageSearchType } from './imageSearchType'

export type SearchAlbumImagesGetParams = {
  album_id?: number
  search_type?: ImageSearchType
  bib_number?: string
  page_size?: number
  page?: number
  sort_by?: string
  order?: string
}
