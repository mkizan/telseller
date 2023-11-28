import { TOrganizationData } from "../types/OrganizationData";

type TOrganizationsInitialState = {
  isLoading: boolean;
  organizations: Array<TOrganizationData>;
  error: string | undefined;
};

export const initialState: TOrganizationsInitialState = {
  isLoading: false,
  organizations: [],
  error: "",
};
