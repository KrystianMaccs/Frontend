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
import AddChargeList from "./AddChargeList";
import { connect } from "react-redux";
import {
  addCharge,
  editCharge,
  deleteCharge,
} from "../../../../redux/actions/payoutActions";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const ChargeList = (props) => {
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [max_fee, setMaxfee] = useState();
  const [charge_type, setChargetype] = useState({});
  const [isOpen, setIsopen] = useState(false);
  const add = (e) => {
    e.preventDefault();
    const body = {
      name,
      description,
      amount,
      max_fee,
      charge_type: charge_type.value,
    };
    props.addCharge(body);
  };
  const addName = (e) => {
    setName(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const addMaxfee = (e) => {
    setMaxfee(e.target.value);
  };
  const addAmount = (e) => {
    setAmount(e.target.value);
  };
  const addChargetype = (e) => {
    setChargetype(e);
    if (e.value === "FLAT") {
      setMaxfee(0);
    } else {
      setMaxfee();
    }
  };
  const toggle = () => {
    setModal(!modal);
  };
  const update = () => {
    const body = {
      name,
      description,
      amount,
      max_fee,
      charge_type: charge_type.value,
    };
    props.editCharge(body, id);
    setModal(false);
  };
  const del = () => {
    props.deleteCharge(id);
    setIsopen(false);
  };
  const toggleModal = () => setIsopen(!isOpen);

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
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        Cell: (cellProps) => {
          return cellProps.row.original.description;
        },
      },
      {
        Header: "Amount",
        Cell: (cellProps) => {
          return cellProps.row.original.amount;
        },
      },
      {
        Header: "Charge Type",
        Cell: (cellProps) => {
          return cellProps.row.original.charge_type;
        },
      },
      {
        Header: "Max Fee",
        Cell: (cellProps) => {
          return cellProps.row.original.max_fee;
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
                setName(cellProps.row.original.name);
                setAmount(cellProps.row.original.amount);
                setMaxfee(cellProps.row.original.max_fee);
                setChargetype(cellProps.row.original.charge_type);
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
              onClick={(e) => {
                toggle();
                setEdit(false);
                setName("");
                setAmount();
                setMaxfee();
                setChargetype("");
                setDescription("");
                setId("");
              }}
              color="primary"
            >
              Add Charge
            </Button>
            <div className="">
              <h2 className="bold-text"> Charge List</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={props.charges}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
            <ActionModal
              title={edit ? "Edit Charge" : "Add Charge"}
              children={
                <AddChargeList
                  name={name}
                  description={description}
                  amount={amount}
                  max_fee={max_fee}
                  charge_type={charge_type}
                  addName={addName}
                  addDescription={addDescription}
                  addAmount={addAmount}
                  addMaxfee={addMaxfee}
                  addChargetype={addChargetype}
                />
              }
              type={edit ? "Update" : "Add"}
              callback={edit ? update : add}
              isOpen={modal}
              toggleModal={toggle}
            />
            <QuestionModal
              title="Delete Charge"
              content="Are you sure you want to delete this Charge"
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
    isLoading: state.payout.isLoading,
  }),
  {
    addCharge,
    editCharge,
    deleteCharge,
  }
)(ChargeList);
