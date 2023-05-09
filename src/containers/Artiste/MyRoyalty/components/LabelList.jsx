/* eslint-disable react/no-array-index-key,react/no-typos */
import React, { useState, useMemo } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import ActionModal from "../../../../shared/components/ActionModal";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import Panel from "../../../../shared/components/Panel";
import PlusIcon from "mdi-react/PlusIcon";
import QuestionModal from "../../../../shared/components/QuestionModal";
import EditLabel from "./EditLabel";
import {
  deleteLabel,
  createLabel,
  editLabel,
} from "../../../../redux/actions/songActions";
import { connect } from "react-redux";
import TableContainer from "../../../../shared/components/TableContainer";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const LabelList = ({
  labels,
  createLabel,
  deleteLabel,
  editLabel,
  isLoading,
}) => {
  const edit = (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
    };

    editLabel(body, id);
    setModal(false);
  };
  const del = (e) => {
    e.preventDefault();
    deleteLabel(id);
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
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "title",
      },
      {
        Header: "Description",
        Cell: (cellProps) => {
          return cellProps.row.original.description;
        },
      },
      {
        Header: "Action",
        // Cell has access to row values. If you are curious what is inside cellProps, you can  console log it
        Cell: (cellProps) => {
          return (
            <DropDownMore
              index={cellProps.row.original.id}
              handleDeleteRow={(e) => {
                toggleModal();
                setId(cellProps.row.original.id);
              }}
              handleEditRow={(e) => {
                toggle();

                setTitle(cellProps.row.original.title);
                setDescription(cellProps.row.original.description);
                setId(cellProps.row.original.id);
                setOk(true);
              }}
              /*  handleDeactivate={(e) =>
              deactivateArtiste(cellProps.row.original.id)
            } */
            />
          );
        },
      },
    ],
    []
  );
  const renderRowSubComponent = (row) => {
    const { title, description } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{`${title}`} </strong>
          </CardTitle>
          <CardText>
            <strong>{description}</strong>
          </CardText>
        </CardBody>
      </Card>
    );
  };
  const [modal, setModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [se, setSe] = useState(false);
  const [ok, setOk] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title,
      description,
    };

    createLabel(body);
    setModal(false);
  };
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <LoadingOverlay
      active={isLoading}
      spinner={<PlainLogo />}
      text="Please Wait..."
    >
      <Panel lg={12} title="Record Label List">
        <Button
          className="todo__btn-add-new"
          onClick={() => {
            toggle();
            setTitle("");
            setDescription("");
            setId("");
            setOk(false);
          }}
        >
          <PlusIcon /> New Label
        </Button>
        <Container style={{ marginTop: 10 }}>
          <TableContainer
            columns={columns}
            data={labels.results || []}
            renderRowSubComponent={renderRowSubComponent}
          />
        </Container>
        <QuestionModal
          isOpen={isOpen}
          toggleModal={toggleModal}
          content="Are you sure you want to delete this Label"
          title="Delete Label"
          callback={del}
        />
        <ActionModal
          isOpen={modal}
          toggleModal={toggle}
          title={ok ? "Edit Label" : "Add Label"}
          disabled={se}
          callback={ok ? edit : handleSubmit}
          children={
            <EditLabel
              title={title}
              description={description}
              addTitle={addTitle}
              addDescription={addDescription}
              se={se}
              setSe={setSe}
            />
          }
          type={ok ? "Update" : "Add"}
        />
      </Panel>
    </LoadingOverlay>
  );
};

export default connect((state) => ({}), {
  deleteLabel,
  createLabel,
  editLabel,
})(LabelList);
