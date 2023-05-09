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
  Badge,
} from "reactstrap";
import TableContainer from "../../../../shared/components/TableContainer";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import QuestionModal from "../../../../shared/components/QuestionModal";

const ArtisteList = ({
  artiste,
  deleteArtiste,
  deactivateArtiste,
  isLoading,
}) => {
  const DropDownMore = ({ id, handleDeleteRow, handleDeactivate }) => (
    <UncontrolledDropdown className="dashboard__table-more">
      <DropdownToggle>
        <p>
          <DotsHorizontalIcon />
        </p>
      </DropdownToggle>
      <DropdownMenu className="dropdown__menu">
        <DropdownItem onClick={handleDeactivate}>Deactivate</DropdownItem>
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
        Header: "First Name",
        Cell: (cellProps) => {
          return cellProps.row.original.first_name;
        },
      },
      {
        Header: "Last Name",
        Cell: (cellProps) => {
          return cellProps.row.original.last_name;
        },
      },
      {
        Header: "Email",
        Cell: (cellProps) => {
          return cellProps.row.original.email;
        },
      },
      {
        Header: "state",
        Cell: (cellProps) => {
          return cellProps.row.original.sor;
        },
      },
      {
        Header: "Stage Name",
        accessor: "stage_name",
      },
      {
        Header: "Music Class",
        Cell: (cellProps) => {
          return cellProps.row.original.music_class;
        },
      },
      {
        Header: "Active",
        Cell: (cellProps) => {
          return cellProps.row.original.is_active ? (
            <Badge color="primary">Active</Badge>
          ) : (
            <Badge color="danger">Not Active</Badge>
          );
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
                setOk(true);
              }}
              handleDeactivate={(e) => {
                toggleModal();
                setId(cellProps.row.original.id);
                setOk(false);
              }}
            />
          );
        },
      },
    ],
    []
  );
  const [isOpen, setIsopen] = useState(false);
  const [id, setId] = useState("");
  const [ok, setOk] = useState(false);
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const del = () => {
    deleteArtiste(id);
    setIsopen(false);
  };
  const deactivate = () => {
    deactivateArtiste(id);
    setIsopen(false);
  };
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
            <div className="">
              <h2 className="bold-text"> Artiste List</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={artiste || []}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
            <QuestionModal
              isOpen={isOpen}
              toggleModal={toggleModal}
              content={
                ok
                  ? "Are you sure you want to delete this Artiste"
                  : "Are you sure you want to activate/deactivate artiste"
              }
              title={ok ? "Delete Artiste" : "Activate/Deactivate Artiste"}
              callback={ok ? del : deactivate}
            />
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

export default ArtisteList;
