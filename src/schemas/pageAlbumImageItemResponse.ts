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
import type { AlbumImageItemResponse } from './albumImageItemResponse'
import type { MetadataSchema } from './metadataSchema'

export interface PageAlbumImageItemResponse {
  code?: string
  data: AlbumImageItemResponse[]
  message?: string
  metadata: MetadataSchema
}
