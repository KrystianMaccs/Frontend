import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ThemeProps, RTLProps } from "../../shared/prop-types/ReducerProps";

class MainWrapper extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    rtl: RTLProps.isRequired,
    children: PropTypes.element.isRequired,
  };

  render() {
    const { theme, children } = this.props;

    const direction = "ltr";

    return (
      <div
        className={`${theme.className} ${direction}-support`}
        dir={direction}
      >
        <div className='wrapper'>{children}</div>
      </div>
    );
  }
}

export default
  connect((state) => ({
    theme: state.theme,
    rtl: state.rtl,
  }))(MainWrapper)
