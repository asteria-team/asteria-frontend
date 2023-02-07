/**
 * @file DatasetDashboard.js
 * @brief Defines the interface for the dataset dashboard view.
 */

import { connect } from "react-redux";
import React from "react";
import { fetchDatasetDomains, fetchDatasetTypes } from "../../actions/datasets";

class DatasetDashboard extends React.Component {
  constructor(props) {
    super(props);

    props.fetchDatasetDomains();
  }

  render() {
    return <div>hello datasets</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    domains: state.datasetMetadata.domains,
    types: state.datasetMetadata.types,
  };
};

const mapDispatchToProps = {
  fetchDatasetDomains,
  fetchDatasetTypes,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatasetDashboard);
