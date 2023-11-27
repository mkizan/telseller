import { TCustomerData } from "../../../types/CustomerData";

type TCustomersInitialState = {
  isLoading: boolean;
  customers: Array<TCustomerData>;
  error: string | undefined;
};

export const initialState: TCustomersInitialState = {
  isLoading: false,
  customers: [],
  error: "",
};
