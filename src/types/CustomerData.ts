export type TCustomerData = {
  id: number;
  name: string;
  code?: number;
  group?: {
    id: number;
    title: string;
  };
  organization: string;
  contract?: string;
  debt?: number;
  contacts: {
    id: number;
    address?: {
      street: string;
      build: number;
      city: string;
    };
    phoneNumbers: {
      personal: number;
      work?: number;
    };
  };
  comment: string;
};
