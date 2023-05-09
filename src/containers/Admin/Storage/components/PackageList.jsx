import React, { useState, useMemo } from "react";
import {
  Card,
  CardBody,
  Col,
  Button,
  CardTitle,
  CardText,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TableContainer from "../../../../shared/components/TableContainer";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import ActionModal from "../../../../shared/components/ActionModal";
import QuestionModal from "../../../../shared/components/QuestionModal";
import Addpackage from "./Addpackage";
import { connect } from "react-redux";
import {
  addPackage,
  editPackage,
  deletePackage,
} from "../../../../redux/actions/adminAction";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const PackageList = ({
  subscription,
  addPackage,
  editPackage,
  deletePackage,
  isLoading,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tracks_count, setTrackcount] = useState(0);
  const [eta_months, setEtamonths] = useState(0);
  const [eta_years, setEtayears] = useState(0);
  const [price, setPrice] = useState(0);
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [id, setId] = useState("");
  const add = () => {
    const body = {
      price,
      eta_years,
      eta_months,
      tracks_count,
      description,
      title,
    };
    addPackage(body);
    setModal(false);
  };
  const update = () => {
    const body = {
      price,
      eta_years,
      eta_months,
      tracks_count,
      description,
      title,
    };
    editPackage(body, id);
    setModal(false);
  };
  const del = () => {
    deletePackage(id);
    setIsopen(false);
  };
  const toggle = () => {
    setModal(!modal);
  };
  const toggleModal = () => [setIsopen(!isOpen)];
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const addTrack = (e) => {
    setTrackcount(e.target.value);
  };
  const addMonth = (e) => {
    setEtamonths(e.target.value);
  };
  const addYear = (e) => {
    setEtayears(e.target.value);
  };
  const addPrice = (e) => {
    setPrice(e.target.value);
  };
  const DropDownMore = ({ id, handleDeleteRow, handleEdit }) => (
    <UncontrolledDropdown className="dashboard__table-more">
      <DropdownToggle>
        <p>
          <DotsHorizontalIcon />
        </p>
      </DropdownToggle>
      <DropdownMenu className="dropdown__menu">
        <DropdownItem onClick={handleEdit}>Edit</DropdownItem>
        <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  const renderRowSubComponent = (row) => {
    const { title, description, price, eta_months, eta_years } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardBody>
          <CardTitle>
            <strong>{`${title} `} </strong>
          </CardTitle>
          <CardText>
            <strong>{description}</strong>
            <br />
            <strong>{`${eta_months} ${eta_years}`} </strong>
            <strong>{price}</strong>
          </CardText>
        </CardBody>
      </Card>
    );
  };
  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        Cell: (cellProps) => {
          return cellProps.row.original.description;
        },
      },
      {
        Header: "Track Count",
        Cell: (cellProps) => {
          return cellProps.row.original.tracks_count;
        },
      },
      {
        Header: "Number of Month",
        Cell: (cellProps) => {
          return cellProps.row.original.eta_months;
        },
      },
      {
        Header: "Number Year",
        Cell: (cellProps) => {
          return cellProps.row.original.eta_years;
        },
      },
      {
        Header: "Price",
        Cell: (cellProps) => {
          return cellProps.row.original.price;
        },
      },
      {
        Header: "Action",
        // Cell has access to row values. If you are curious what is inside cellProps, you can  console log it
        Cell: (cellProps) => {
          return (
            <DropDownMore
              index={cellProps.id}
              handleDeleteRow={(e) => {
                toggleModal();
                setId(cellProps.row.original.id);
              }}
              handleEdit={(e) => {
                toggle();
                setEdit(true);
                setPrice(cellProps.row.original.price);
                setTitle(cellProps.row.original.title);
                setTrackcount(cellProps.row.original.tracks_count);
                setEtayears(cellProps.row.original.eta_years);
                setEtamonths(cellProps.row.original.eta_months);
                setDescription(cellProps.row.original.description);
                setId(cellProps.row.original.id);
              }}
            />
          );
        },
      },
    ],
    []
  );
  return (
    <Col md={12} lg={12}>
      <LoadingOverlay
        active={isLoading}
        spinner={<PlainLogo />}
        text="Please Wait..."
      >
        <Card>
          <CardBody
            style={{
              background: " linear-gradient(45deg,#cc2b5e,   #753a88)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
              overflowX: "scroll",
            }}
          >
            <Button
              onClick={(e) => {
                toggle();
                setEdit(false);
                setPrice(0);
                setTitle("");
                setTrackcount(0);
                setEtayears(0);
                setEtamonths(0);
                setDescription("");
              }}
              color="primary"
            >
              Add package
            </Button>
            <div className="">
              <h2 className="bold-text"> Package List</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={subscription}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
            <ActionModal
              title={edit ? "Edit package" : "Add package"}
              children={
                <Addpackage
                  title={title}
                  description={description}
                  price={price}
                  eta_years={eta_years}
                  eta_months={eta_months}
                  tracks_count={tracks_count}
                  addTitle={addTitle}
                  addDescription={addDescription}
                  addTrack={addTrack}
                  addMonth={addMonth}
                  addYear={addYear}
                  addPrice={addPrice}
                />
              }
              type={edit ? "Update" : "Add"}
              callback={edit ? update : add}
              isOpen={modal}
              toggleModal={toggle}
            />
            <QuestionModal
              title="Delete Package"
              content="Are you sure you want to delete this package"
              callback={del}
              isOpen={isOpen}
              toggleModal={toggleModal}
            />
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

export default connect(
  (state) => ({
    isLoading: state.admin.isLoading,
  }),
  {
    addPackage,
    editPackage,
    deletePackage,
  }
)(PackageList);
