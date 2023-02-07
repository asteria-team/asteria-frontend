/**
 * @file actions/datasets/index.js
 * @brief Defines actions relating to datasets.
 */

import { FETCH_DATASET_DOMAINS, FETCH_DATASET_TYPES } from "../types";
import axios from "axios";

/**
 * @brief Fetch dataset domains from backend.
 * @param {*} dispatch
 */
export const fetchDatasetDomains = () => (dispatch) => {
  axios
    .get("/datalake/metadata/dataset/domain")
    .then((response) => {
      dispatch({
        type: FETCH_DATASET_DOMAINS,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_DATASET_DOMAINS,
        payload: {
          domains: [],
        },
      });
    });
};

/**
 * @brief Fetch dataset types from backend.
 * @param {*} dispatch
 */
export const fetchDatasetTypes = () => (dispatch) => {
  axios
    .get("/datalake/metadata/dataset/type")
    .then((response) => {
      dispatch({
        type: FETCH_DATASET_TYPES,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_DATASET_TYPES,
        payload: {
          types: [],
        },
      });
    });
};
