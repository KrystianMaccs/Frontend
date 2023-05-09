/* eslint-disable react/no-array-index-key,react/no-typos */
import React, { useState, useMemo, useEffect } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Card,
  CardBody,
  Table,
} from "reactstrap";
import ActionModal from "../../../../shared/components/ActionModal";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import QuestionModal from "../../../../shared/components/QuestionModal";
import EditRoyalty from "./EditRoyalty";
import {
  editBeneficiary,
  deleteBeneficiary,
} from "../../../../redux/actions/songActions";
import { connect } from "react-redux";
import TableContainer from "../../../../shared/components/TableContainer";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import Select from "react-select";

const RoyaltyList = (props) => {
  const songs = [];
  const [select, setSelect] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const handleSelect = (selectedOption) => {
    setSelect(selectedOption);
    setDisabled(false);
    /*    for (
      let index = 0;
      index < selectedOption.value.royalties.length;
      index++
    ) {
      tot += selectedOption.value.royalties[index].share;
    }
    setRem(100 - tot);*/
  };
  useEffect(() => {
    for (let index = 0; index < props.song.results.length; index++) {
      songs.push({
        value: props.song.results[index],
        label: props.song.results[index].title,
      });
    }
  });
  const edit = (e) => {
    e.preventDefault();
    const body = {
      email,
      description,
      share,
      fullname,
      phone,
    };
    
    props.editBeneficiary(body, id);
    setModal(false);
  };
  const del = (e) => {
    e.preventDefault();
    props.deleteBeneficiary(id);
    setIsopen(false);
  };
  const DropDownMore = ({ id, handleDeleteRow, handleEditRow }) => (
    <UncontrolledDropdown className="dashboard__table-more">
      <DropdownToggle>
        <p>
          <DotsHorizontalIcon />
        </p>
      </DropdownToggle>
      <DropdownMenu className="dropdown__menu">
        <DropdownItem onClick={handleEditRow}>Edit</DropdownItem>
        <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  const [modal, setModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const [fullname, setFullname] = useState("");
  const [share, setShare] = useState("");
  const [description, setDescription] = useState("");
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addPhone = (e) => {
    setPhone(e.target.value);
  };
  const addShare = (e) => {
    setShare(e.target.value);
  };
  const addName = (e) => {
    setFullname(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <LoadingOverlay
      active={props.isLoading}
      spinner={<PlainLogo />}
      text="Please Wait..."
    >
      <Card>
        <CardBody
          style={{
            background: "linear-gradient(45deg, #843cf7, #38b8f2)",
            color: "#fff",
            fontWeight: "lighter",
            boxShadow: "-1px 1px 19px black",
          }}
        >
          <div className="form__form-group">
            <span className="form__form-group-label">Song</span>
            <div className="form__form-group-field">
              <Select
                onChange={handleSelect}
                name="nationality"
                options={songs}
                clearable={false}
                className="react-select"
                placeholder="My Songs"
                classNamePrefix="react-select"
                value={select}
              />
            </div>
          </div>
          {select ? (
            <>
              <div className="card__title">
                <h3 className="bold-text">Songs Distributed</h3>
                <h5 className="subhead">
                  Payout breakdown of <span className="red-text">songs</span>
                </h5>
              </div>
              <Table responsive className="table--bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Full Name</th>
                    <th>Description</th>
                    <th>Share</th>
                    <th>Phone</th>
                    <th>Paid</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {select.value.royalties.length < 1
                    ? "No Royalty yet"
                    : select.value.royalties.map((r, i) => {
                        return (
                          <tr>
                            <td> {i + 1}</td>
                            <td> {r.email}</td>
                            <td> {r.fullname}</td>
                            <td> {r.description}</td>
                            <td> {r.share}</td>
                            <td> {r.phone}</td>
                            <td> {r.paid ? "Paid" : "Not Paid"}</td>
                            <td>
                              {" "}
                              <DropDownMore
                                index={i}
                                handleDeleteRow={(e) => {
                                  toggleModal();
                                  setId(r.id);
                                }}
                                handleEditRow={(e) => {
                                  toggle();
                                  setId(r.id);
                                  setEmail(r.email);
                                  setFullname(r.fullname);
                                  setDescription(r.description);
                                  setShare(r.share);
                                  setPhone(r.phone);
                                }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </Table>

              <QuestionModal
                isOpen={isOpen}
                toggleModal={toggleModal}
                content="Are you sure you want remove this beneficiary from your Royalty."
                title="Remove Beneficiary"
                callback={del}
              />
              <ActionModal
                isOpen={modal}
                toggleModal={toggle}
                title={"Edit Beneficiary"}
                callback={edit}
                children={
                  <EditRoyalty
                    fullname={fullname}
                    share={share}
                    email={email}
                    phone={phone}
                    description={description}
                    addName={addName}
                    addEmail={addEmail}
                    addShare={addShare}
                    addPhone={addPhone}
                    addDescription={addDescription}
                  />
                }
                type={"Update"}
              />
            </>
          ) : null}
        </CardBody>
      </Card>
    </LoadingOverlay>
  );
};

export default connect((state) => ({}), {
  editBeneficiary,
  deleteBeneficiary,
})(RoyaltyList);
