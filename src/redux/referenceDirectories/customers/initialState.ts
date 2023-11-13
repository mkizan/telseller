type TCustomers = {
  id: number;
  name: string;
  code?: number;
  group: {
    id: number;
    title: string;
  };
  organization: string;
  contract?: unknown;
  debt: number;
  contacts: [
    {
      address?: {
        street: string;
        build: number | string;
        city: string;
      };
      addressDelivery?: {
        street: string;
        build: string;
        city: string;
      };
      phoneNumbers: {
        work: string;
        personal: string;
      };
    }
  ];
};

type TCustomersInitialState = {
  isLoading: boolean;
  customers: Array<TCustomers>;
  error: string | undefined;
};

export const initialState: TCustomersInitialState = {
  isLoading: false,
  customers: [],
  error: "",
};
