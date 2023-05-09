import React, { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import TableContainer from "../../../../shared/components/TableContainer";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import { connect } from "react-redux";
import ActionModal from "../../../../shared/components/ActionModal";
import QuestionModal from "../../../../shared/components/QuestionModal";
import EditAdvert from "./EditAdvert";
import PlusIcon from "mdi-react/PlusIcon";
import {
  addAdvert,
  editAdvert,
  deleteAdvert,
} from "../../../../redux/actions/advertAction";
const AdvertList = (props) => {
  const create = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file ? file[0] : null);
    formdata.append("file_type", file ? file[0].type : null);
    formdata.append("link", link);
    formdata.append("details", details);
    formdata.append("plan", plan ? plan.value : null);
    formdata.append("short_text", short_text);
    props.addAdvert(formdata);
    setModal(!modal);
  };
  const edit = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file ? file[0] : null);
    formdata.append("file_type", file ? file[0].type : null);
    formdata.append("link", link);
    formdata.append("details", details);
    formdata.append("plan", plan ? plan.value : null);
    formdata.append("short_text", short_text);

    props.editAdvert(formdata, id);
    setModal(!modal);
  };
  const del = (e) => {
    e.preventDefault();
    props.deleteAdvert(id);
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
    return null;
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
        Header: "File Type",
        accessor: "file_type",
      },
      {
        Header: "Short Text ",
        accessor: "short_text",
      },
      {
        Header: "Link",
        //accessor: "link",
        Cell: (cellProps) => {
          return <a href={cellProps.row.original.link}>Click to get to link</a>;
        },
      },
      {
        Header: "details",
        accessor: "details",
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
                setLink(cellProps.row.original.link);
                setDetails(cellProps.row.original.details);
                setShortext(cellProps.row.original.short_text);
                const x = {};
                x.value = cellProps.row.original.plan;
                x.label = cellProps.row.original.plan;
                setPlan(x);
                setOk(true);
              }}
            />
          );
        },
      },
    ],
    []
  );
  const [file_type, setFiletype] = useState("");
  const [file, setFile] = useState([]);
  const [link, setLink] = useState("");
  const [short_text, setShortext] = useState(0);
  const [details, setDetails] = useState(false);
  const [plan, setPlan] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");
  const [ok, setOk] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const toggleModal = () => {
    setIsopen(!isOpen);
  };
  const addLink = (e) => {
    setLink(e.target.value);
  };
  const addText = (e) => {
    setShortext(e.target.value);
  };
  const addDetails = (e) => {
    setDetails(e.target.value);
  };
  const addPlan = (value) => {
    setPlan(value);
  };
  const removeFile = (index, e) => {
    const { onChange, value } = this.props;
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
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
                setLink();
                setDetails();
                setShortext();
                setId("");
                setOk(false);
                setPlan();
                setFile([]);
              }}
            >
              <PlusIcon /> New Advert
            </Button>
            <div className="">
              <h2 className="bold-text"> Advert List</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={props.advert ? props.advert : []}
                renderRowSubComponent={renderRowSubComponent}
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
                <EditAdvert
                  short_text={short_text}
                  link={link}
                  file={file}
                  details={details}
                  addText={addText}
                  addDetails={addDetails}
                  addLink={addLink}
                  setFile={setFile}
                  plan={plan}
                  addPlan={addPlan}
                  plans={props.plan}
                  removeFile={removeFile}
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

export default connect((state) => {}, { addAdvert, editAdvert, deleteAdvert })(
  AdvertList
);
