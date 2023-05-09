import React from "react";
import PropTypes from "prop-types";
import { DatePickerInput } from "rc-datepicker";

//import "rc-datepicker/lib/style.css";

class DatePickerField extends React.Component {
  state = {
    datePickerDate: "2015-05-13",
    datePickerInputDate: "",
    showInput: true,
    disabled: false,
  };

  toggleInput = () => this.setState({ showInput: !this.state.showInput });

  onClear = () => this.setState({ datePickerDate: null });

  resetState = () => this.setState({ datePickerInputDate2: undefined });

  render() {
    const { datePickerInputDate } = this.state;
    const { onChange, placeholder } = this.props;
    return (
      <div style={{ height: "40px", width: "100%" }}>
        {this.state.showInput && (
          <div className="ui input">
            <DatePickerInput
              disabled={this.state.disabled}
              displayFormat="DD/MM/YYYY"
              returnFormat="YYYY-MM-DD"
              className="my-react-component"
              onChange={(jsDate, dateString) => {
                this.setState({ datePickerInputDate: dateString });
                onChange(dateString);
              }}
              style={{ height: "40px", width: "100%" }}
              /* onShow={this.log.bind(this, "show")}
              onHide={this.log.bind(this, "hide")} */
              showOnInputClick
              placeholder={placeholder}
              locale="ng"
              onClear={this.onClear}
              value={datePickerInputDate}
              startMode="month"
            />
          </div>
        )}
      </div>
    );
  }
}

const renderDatePickerField = (props) => {
  const { input } = props;

  return <DatePickerField {...input} />;
};

renderDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
};

export default renderDatePickerField;
