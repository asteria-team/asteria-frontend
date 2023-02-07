/**
 * @file index.js
 * @brief Root reducer definition.
 */

import { combineReducers } from "redux";
import DatasetMetadataReducer from "./reducer-dataset-metadata";

const rootReducer = combineReducers({
  datasetMetadata: DatasetMetadataReducer,
});

export default rootReducer;
