/**
 * @file DatasetCollection.jsx
 * @brief View dataset metadata.
 */

import Box from "@mui/material/Box";

const DatasetCollection = (props) => {
  return (
    <Box>
      <div>{props.name}</div>
    </Box>
  );
};

export default DatasetCollection;
