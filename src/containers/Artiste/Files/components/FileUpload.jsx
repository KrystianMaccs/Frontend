import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Col,
  ButtonToolbar,
  UncontrolledTooltip,
  Button,
} from "reactstrap";
import Button1 from "reactstrap-button-loader";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import renderDropZoneField from "../../../../shared/components/form/DropZoneAudio";
import renderDropZone from "../../../../shared/components/form/DropZoneImage";
import AccountOutlineIcon from "mdi-react/AccountOutlineIcon";
import renderMultiSelectField from "../../../../shared/components/form/MultiSelect";
import UploadIcon from "mdi-react/UploadIcon";
import renderDatePickerField from "../../../../shared/components/form/DatePicker";
import CalendarBlankIcon from "mdi-react/CalendarBlankIcon";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import Select from "react-select";
import { createLabel } from "../../../../redux/actions/songActions";
import { Link } from "react-router-dom";
import CreateLabel from "./CreateLabel";

var valid = true;
const validateImage = (imageList) => {
  if (imageList) {
    if (imageList.length > 1) {
      return "You can upload one image at a time";
    } else if (imageList.length === 1) {
      let selectedImage = imageList[0];
      if (!selectedImage.type.match("image.*")) {
        return "Only image files are allowed";
      } else if (selectedImage.size < 1000000) {
        valid = true;
        return "File is not up to the required size";
      } else {
        valid = false;
      }
    }
  }
};

const required = (value) => (value ? undefined : "Required");
const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(200);
const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const renderedField = ({
  label,
  input,
  type,
  meta: { touched, error, warning },
}) => (
  <div style={{ width: "inherit" }}>
    <input
      {...input}
      placeholder={label}
      type={type}
      style={{ height: "40px" }}
      className="form__form-group-field"
    />
    {touched &&
      ((error && (
        <span style={{ fontSize: "13px", color: "red" }}>{error}</span>
      )) ||
        (warning && (
          <span style={{ fontSize: "13px", color: "red" }}>{warning}</span>
        )))}
  </div>
);

const FileUpload = ({
  reset,
  handleSubmit,
  isLoading,
  genres,
  access,
  music,
  setMusic,
  labels,
  createLabel,
  labe,
  handleLabel,
  album,
}) => {
  const [genre, setGenre] = useState([]);
  const [accesss, setAccesss] = useState([]);
  const [label, setLabel] = useState([]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notice, setNotice] = useState(true);
  const toggle = () => {
    setModal(!modal);
  };
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const handledSubmit = (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
    };
    createLabel(body);
    setModal(false);
  };
  useEffect(() => {
    if (labels && labels.length > 0) {
      const l = labels.map((l, i) => ({
        value: l.id,
        label: l.title,
        title: l.title,
      }));
      setLabel(l);
    }
  }, [labels]);
  useEffect(() => {
    if (genres && genres.length > 0) {
      const g = genres.map((g, i) => ({
        value: g.title,
        label: g.title,
        title: g.title,
      }));
      setGenre(g);
    }
  }, [genres]);

  useEffect(() => {
    if (access && access.length > 0) {
      const a = access.map((a, i) => ({
        value: a.title,
        label: a.title,
        title: a.title,
      }));
      setAccesss(a);
    }
  }, [access]);
  return (
    <Col md={12} lg={6}>
      <CreateLabel
        toggle={toggle}
        modal={modal}
        title={title}
        description={description}
        addTitle={addTitle}
        addDescription={addDescription}
        handledSubmit={handledSubmit}
      />

      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >
        <>
          <Card className="card--not-full-height">
            <CardBody
              style={{
                background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
                //  color: "#fff",
                fontWeight: "lighter",
                boxShadow: "-1px 1px 19px black",
              }}
            >
              {notice ? (
                <div>
                  <center>
                    <h2>File Upload</h2>
                  </center>
                  <div>NOTICE !!!</div>
                  <div>Minimum File size: 1mb</div>
                  <div> Maximum File size: 200mb</div>
                  <div> Maximum Bit rate: 24-bit</div>
                  <div> Minimum Bit rate: 44.1Khz</div>
                  {album ? (
                    <Button disabled={!album} onClick={() => setNotice(false)}>
                      Proceed
                    </Button>
                  ) : (
                    <div style={{color: "#ff0000"}}>YOU CAN'T UPLOAD SONGS NOW, PLEAE CONTACT ADMIN</div>
                  )}
                </div>
              ) : (
                <>
                  <div className="card__title">
                    <h3 className="bold-text">Upload</h3>
                    <h5 className="subhead">
                      Fill in the form to upload your music
                    </h5>
                  </div>
                  {music ? (
                    <>
                      <form className="form login-form" onSubmit={handleSubmit}>
                        <div className="form__form-group">
                          <span className="form__form-group-label">
                            Pre Sales Date
                          </span>

                          <div className="form__form-group-field">
                            <div className="form__form-group-icon">
                              <CalendarBlankIcon />
                            </div>
                            <Field
                              name="preSalesDate"
                              component={renderDatePickerField}
                              placeholder="Release Start Date"
                            />
                          </div>
                        </div>
                        <div className="form__form-group">
                          <span className="form__form-group-label">
                            Release Start Date
                          </span>

                          <div className="form__form-group-field">
                            <div className="form__form-group-icon">
                              <CalendarBlankIcon />
                            </div>
                            <Field
                              name="releaseStartDate"
                              component={renderDatePickerField}
                              placeholder="Release Start Date"
                            />
                          </div>
                        </div>
                        <div className="form__form-group">
                          <span className="form__form-group-label">
                            Release End Date
                          </span>

                          <div className="form__form-group-field">
                            <div className="form__form-group-icon">
                              <CalendarBlankIcon />
                            </div>
                            <Field
                              name="releaseEndDate"
                              component={renderDatePickerField}
                              placeholder="Release End Date"
                            />
                          </div>
                        </div>{" "}
                        <span className="form__form-group-label">
                          Cover Image
                        </span>
                        <Field
                          name="cover"
                          component={renderDropZone}
                          validate={validateImage}
                        />
                        <span className="form__form-group-label">
                          Audio file
                        </span>
                        <Field name="file" component={renderDropZoneField} />
                        <ButtonToolbar className="form__button-toolbar">
                          <Button1
                            loading={isLoading}
                            icon={<UploadIcon />}
                            color="primary"
                            type="submit"
                            disabled={valid}
                          >
                            Submit
                          </Button1>
                          <Button1
                            type="button"
                            onClick={() => {
                              setMusic(false);
                            }}
                          >
                            Back
                          </Button1>
                        </ButtonToolbar>
                      </form>{" "}
                    </>
                  ) : (
                    <div>
                      <div className="form__form-group">
                        <span className="form__form-group-label">Genre</span>
                        <div className="form__form-group-field">
                          <Field
                            name="genres"
                            component={renderMultiSelectField}
                            options={genre}
                          />
                        </div>
                      </div>
                      <div className="form__form-group">
                        <span className="form__form-group-label">Title</span>
                        <div className="form__form-group-field">
                          <div className="form__form-group-icon">
                            <AccountOutlineIcon />
                          </div>
                          <Field
                            name="title"
                            component={renderedField}
                            type="text"
                            label="Song Title"
                            validate={[required, maxLength15, minLength2]}
                            warn={alphaNumeric}
                          />
                        </div>
                      </div>
                      <div className="form__form-group">
                        <span className="form__form-group-label">
                          Description
                        </span>
                        <div className="form__form-group-field">
                          <Field
                            name="description"
                            component="textarea"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form__form-group">
                        <div className="form__form-group form__form-group--address">
                          <Link id="TooltipTop" to={"/app/artiste/profile"}>
                            <span className="form__form-group-label">
                              Record Label
                            </span>
                          </Link>
                          <UncontrolledTooltip
                            dir={"top"}
                            placement="top"
                            target="TooltipTop"
                          >
                            Click to Add your Record Label
                          </UncontrolledTooltip>
                          <br />
                          {labels.length > 0 ? (
                            <Select
                              options={label}
                              value={labe}
                              onChange={handleLabel}
                            />
                          ) : (
                            <Button1
                              color="link"
                              style={{ onHover: "none" }}
                              onClick={toggle}
                            >
                              Create label
                            </Button1>
                          )}
                        </div>
                      </div>
                      <div className="form__form-group">
                        <span id="access" className="form__form-group-label">
                          Access Availability
                        </span>
                        <UncontrolledTooltip
                          dir={"top"}
                          placement="top"
                          target="access"
                        >
                          Declare the type of access you want for your song
                          during distribution
                        </UncontrolledTooltip>
                        <div className="form__form-group-field">
                          <Field
                            name="access_availability"
                            component={renderMultiSelectField}
                            options={accesss}
                          />
                        </div>
                        <ButtonToolbar className="form__button-toolbar">
                          <Button1
                            color="primary"
                            disabled={isLoading}
                            onClick={() => {
                              setMusic(true);
                            }}
                          >
                            Continue
                          </Button1>
                        </ButtonToolbar>
                      </div>
                    </div>
                  )}
                </>
              )}
            </CardBody>
          </Card>
        </>
      </LoadingOverlay>
    </Col>
  );
};

FileUpload.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  // a unique identifier for this form
})(connect((state) => ({}), { createLabel })(FileUpload));
