// Define role as a strict enum
export type UserRole = "admin" | "user";
export interface User {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    token: string;
    refreshToken?: string;
  }

  export interface Users {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
    role: UserRole;
    address: string;
    isBlocked: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
  }