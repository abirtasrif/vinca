import { beautyPackageType } from './packageItem';
import { userType } from './user';

export type bookingType = {
  _id: string;
  user: userType;
  beautyPackage: beautyPackageType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
