import React from "react";
import { connect } from "react-redux";


const EditAdvertPlan = (props) => {
  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">Title</span>
        <div className="form__form-group-field">
          <input
            style={{ color: "#000" }}
            type="text"
            placeholder="Name"
            required
            value={props.name}
            onChange={props.addName}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Description</span>
        <div className="form__form-group-field">
          <textarea
            placeholder="Ad Plan description..."
            required
            value={props.description}
            onChange={props.addDescription}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">
          Expiry Month
        </span>
        <div className="form__form-group-field">
          <input
            type="number"
            placeholder="Expiry Month"
            required
            value={props.expiry_month}
            onChange={props.addExpiry}
          />
        </div>
      </div>
    </form>
  );
};

export default connect((state) => ({}))(EditAdvertPlan);
