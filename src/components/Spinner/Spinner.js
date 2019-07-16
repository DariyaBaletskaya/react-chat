import React from "react";
import { connect } from "react-redux";
import * as actions from "./actions";

class Spinner extends React.Component {
  getSpinner() {
    return (
      <img
        id="spinner"
        src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif"
        alt="loading"
      />
    );
  }
  render() {
    const loading = this.props.loading;
    return loading ? this.getSpinner() : null;
  }
}

const mapStateToProps = state => ({
  loading: state.spinner.loading
});
const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spinner);
