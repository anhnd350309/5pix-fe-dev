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

export interface AlbumCreateRequest {
  album_image_url: string;
  album_name: string;
  event_date: string;
  is_find_all_image?: number;
  is_find_by_face?: number;
  is_find_by_metadata?: number;
  is_highlight?: number;
}
