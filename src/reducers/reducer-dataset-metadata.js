/**
 * @file reducers/reducer-dataset-metadata.js
 * @brief Reducer definition for dataset metadata.
 */

import cloneDeep from "lodash/cloneDeep";
import { FETCH_DATASET_DOMAINS, FETCH_DATASET_TYPES } from "../actions/types";

const initialState = {
  domains: [],
  types: [],
};

export default function (state = initialState, action) {
  const stateCopy = cloneDeep(state);
  switch (action.type) {
    case FETCH_DATASET_DOMAINS:
      return {
        ...stateCopy,
        domains: action.payload,
      };
    case FETCH_DATASET_TYPES:
      return {
        ...stateCopy,
        types: action.payload,
      };
    default:
      return state;
  }
}
