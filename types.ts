
export enum UserRole {
  ADMIN = 'ADMIN',
  ALUMNI = 'ALUMNI'
}

export enum MembershipStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  PARTIAL = 'PARTIAL'
}

export enum DonationCategory {
  ASTI = 'ASTI',
  ASTI_KASIH = 'ASTI KASIH',
  IHY = 'IHY'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
}

export interface AlumniProfile {
  id: string;
  userId: string;
  batch: string;
  isDuta: boolean;
  profession: string;
  location: string;
  membershipStatus: MembershipStatus;
  totalPaid: number;
  totalDue: number;
  avatar?: string;
  visibility: 'PUBLIC' | 'PRIVATE' | 'ALUMNI_ONLY';
}

export interface BusinessListing {
  id: string;
  ownerId: string;
  name: string;
  industry: string;
  description: string;
  website?: string;
  logo?: string;
}

export interface NavState {
  view: 'LANDING' | 'LOGIN' | 'DASHBOARD' | 'ALUMNI' | 'BUSINESS' | 'DONATIONS' | 'EVENTS' | 'PROFILE' | 'SYSTEM_DOCS' | 'SUPPORT' | 'IDEAS';
}
