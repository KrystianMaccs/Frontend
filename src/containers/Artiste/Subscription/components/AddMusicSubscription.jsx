import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Button, ButtonToolbar } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";
import renderMultiSelectField from "../../../../shared/components/form/Select";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const AddMusicSubscription = ({
  handleSubmit,
  song,
  mySubscription,
  addSong,
  isLoading,
}) => {
  const sub = [];
  const songs = [];
  useEffect(() => {
    for (let index = 0; index < mySubscription.length; index++) {
      sub.push({
        value: mySubscription[index].id,
        label: mySubscription[index].package.title,
      });
    }
  }, [sub]);
  for (let index = 0; index < song.length; index++) {
    songs.push({
      value: song[index].id,
      label: song[index].title,
    });
  }

  return (
    <Col md={12} lg={4}>
      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >
        <Card className="card--not-full-height">
          <CardBody
            style={{
              background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
            }}
          >
            <div className="card__title">
              <h3 className="bold-text">Add Song to Distribution</h3>
              <h5 className="subhead">
                Fill in the form to Add your Song to a Subscription
              </h5>
            </div>{" "}
            <>
              <form className="form" onSubmit={handleSubmit(addSong)}>
                <div className="form__form-group">
                  <span className="form__form-group-label">Song</span>
                  <div className="form__form-group-field">
                    <Field
                      name="song"
                      component={renderMultiSelectField}
                      options={songs}
                    />
                  </div>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">
                    Subcription Plan
                  </span>
                  <div className="form__form-group-field">
                    <Field
                      name="plan"
                      component={renderMultiSelectField}
                      options={sub}
                    />
                  </div>
                  <ButtonToolbar className="form__button-toolbar">
                    <Button color="primary">Add</Button>
                  </ButtonToolbar>
                </div>
              </form>{" "}
            </>
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

AddMusicSubscription.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: "add_song_form", // a unique identifier for this form
})(AddMusicSubscription);
