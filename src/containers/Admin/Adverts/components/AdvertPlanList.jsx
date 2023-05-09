import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  CardImg,
  CardTitle,
  CardText,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import TableContainer from "../../../../shared/components/TableContainer";
import PlusIcon from "mdi-react/PlusIcon";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import { connect } from "react-redux";
import ActionModal from "../../../../shared/components/ActionModal";
import QuestionModal from "../../../../shared/components/QuestionModal";
import EditAdvertPlan from "./EditAdvertPlan";
import {
  addPlan,
  editPlan,
  deletePlan,
} from "../../../../redux/actions/advertAction";
const AdvertPlanList = (props) => {
  const create = (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      expiry_month,
    };
    props.addPlan(body);
    setModal(false);
  };
  const edit = (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      expiry_month,
    };
    props.editPlan(body, id);
    setModal(false);
  };
  const del = (e) => {
    e.preventDefault();
    props.deletePlan(id);
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

  const renderRowSubComponent = (row) => {
    const {
      first_name,
      last_name,
      address,
      sor,
      lga,
      dp,
      phone,
    } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardImg top src={dp.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <strong>{`${first_name} ${last_name}`} </strong>
          </CardTitle>
          <CardText>
            <strong>Phone</strong>: {phone} <br />
            <strong>Address:</strong> {`${address} ${lga},${sor}`}
          </CardText>
        </CardBody>
      </Card>
    );
  };
  const columns = useMemo(
    () => [
    /*   {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      }, */
      {
        Header: "name",
        accessor: "name",
      },
      {
        Header: "Description ",
        accessor: "description",
      },
      {
        Header: "Expiry Month",
        accessor: "expiry_month",
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
              handleEditRow={(e) => {
                toggle();
                setId(cellProps.row.original.id);
                setName(cellProps.row.original.name);
                setDescription(cellProps.row.original.description);
                setExpirymonth(cellProps.row.original.expiry_month);
                setOk(true);
              }}
            />
          );
        },
      },
    ],
    []
  );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expiry_month, setExpirymonth] = useState(0);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [id, setId] = useState("");
  const [ok, setOk] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const addName = (e) => {
    setName(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const addExpiry = (e) => {
    setExpirymonth(e.target.value);
  };
  return (
    <Col md={12} lg={12}>
      <LoadingOverlay
        active={props.isLoading}
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
              className="todo__btn-add-new"
              onClick={() => {
                toggle();
                setName("");
                setDescription("");
                setExpirymonth(0);
                setId("");
                setOk(false);
              }}
            >
              <PlusIcon /> New Advert Plan
            </Button>
            <div className="">
              <h2 className="bold-text"> Advert Plan List</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={props.plan ? props.plan : []}
                renderRowSubComponent={{}}
              />
            </Container>
            <QuestionModal
              isOpen={isOpen}
              toggleModal={toggleModal}
              content="Are you sure you want to delete this Advert Plan"
              title="Delete Advert Plan"
              callback={del}
            />
            <ActionModal
              isOpen={modal}
              toggleModal={toggle}
              title={ok ? "Edit Advert Plan" : "Add Advert Plan"}
              callback={ok ? edit : create}
              children={
                <EditAdvertPlan
                  name={name}
                  description={description}
                  expiry_month={expiry_month}
                  addName={addName}
                  addExpiry={addExpiry}
                  addDescription={addDescription}
                />
              }
              type={ok ? "Update" : "Add"}
            />
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

export default connect((state) => {}, { addPlan, editPlan, deletePlan })(
  AdvertPlanList
);
