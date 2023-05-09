import React, { useEffect } from "react";
import { connect } from "react-redux";
import Dropzone from "react-dropzone";
import Select from "react-select";

const EditAdvert = (props) => {
  const plane = [];
  useEffect(() => {
    for (let index = 0; index < props.plans.length; index++) {
      plane.push({
        value: props.plans[index].id,
        label: props.plans[index].name,
      });
    }
  });
  return (
    <form className="form">
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">
          Short Text
        </span>
        <div className="form__form-group-field">
          <input
            type="text"
            placeholder="Name"
            required
            value={props.short_text}
            onChange={props.addText}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Details</span>
        <div className="form__form-group-field">
          <input
            placeholder="details..."
            required
            value={props.details}
            onChange={props.addDetails}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">Link</span>
        <div className="form__form-group-field">
          <input
            type="text"
            placeholder="e.g. https://ithinkucan.com"
            required
            value={props.link}
            onChange={props.addLink}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label typography-message">File</span>
        <div className="form__form-group-field">
          <div
            className={`dropzone dropzone--single  dropzone--custom-height" : ""
            }`}
          >
            <Dropzone
              accept="image/gif"
              name={props.file}
              multiple={false}
              onDrop={(fileToUpload) => {
                props.setFile(fileToUpload);
                //props.onDrop(fileToUpload);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropzone__input">
                  {(!props.file || props.file.length === 0) && (
                    <div className="dropzone__drop-here">
                      <span className="lnr lnr-upload" /> Drop Image File here
                      to upload
                    </div>
                  )}
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
            {props.file && Array.isArray(props.file) && props.file.length > 0 && (
              <aside className="dropzone__img">
                <img src={props.file[0].preview} alt="drop-img" />
                <p className="dropzone__img-name">{props.file[0].name}</p>
                <button
                  className="dropzone__img-delete"
                  type="button"
                  onClick={(e) => props.removeFile(0, e)}
                >
                  Remove
                </button>
              </aside>
            )}
          </div>
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Plan</span>
        <div className="form__form-group-field">
          <Select
            styles={{ width: "100%" }}
            options={plane}
            value={props.plan}
            onChange={props.addPlan}
          />
        </div>
      </div>
    </form>
  );
};

export default connect((state) => ({}))(EditAdvert);
