import { ReferenceDirectoriesListData } from "../types/ReferenceDirectoriesListData";

type ReferenceDirectoriesListInitialState = {
  isLoading: boolean;
  referenceDirectoriesList: Array<ReferenceDirectoriesListData>;
  error: string | undefined;
};

export const initialState: ReferenceDirectoriesListInitialState = {
  isLoading: false,
  referenceDirectoriesList: [],
  error: "",
};
