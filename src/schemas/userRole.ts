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

/**
 * An enumeration.
 */
export type UserRole = typeof UserRole[keyof typeof UserRole];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserRole = {
  admin: 'admin',
  guest: 'guest',
} as const;
