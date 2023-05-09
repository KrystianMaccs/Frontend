import React, { useMemo, useState } from "react";
import { connect } from "react-redux";
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
  Table,
} from "reactstrap";
import TableContainer from "../../../../shared/components/TableContainer";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import {
  deleteSong,
  editSong,
  redistributeSong,
  songStatus,
  songLink,
} from "../../../../redux/actions/songActions";
import QuestionModal from "../../../../shared/components/QuestionModal";
import ActionModal from "../../../../shared/components/ActionModal";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import { useDropzone } from "react-dropzone";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as moment from "moment";

import EditSong from "./EditSong";
const MusicTable = ({
  songs,
  deleteSong,
  editSong,
  genre,
  labels,
  access,
  album,
  isLoading,
  redistributeSong,
  songStatus,
  songLink,
}) => {
  const DropDownMore = ({
    id,
    handleDeleteRow,
    handleEditRow,
    redistributeSong,
    songStatus,
    songLink,
  }) => (
    <UncontrolledDropdown className="dashboard__table-more">
      <DropdownToggle>
        <p>
          <DotsHorizontalIcon />
        </p>
      </DropdownToggle>
      <DropdownMenu className="dropdown__menu">
        <DropdownItem onClick={handleEditRow}>Edit</DropdownItem>
        <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
        <DropdownItem onClick={redistributeSong}>Redistribute</DropdownItem>
        <DropdownItem onClick={songStatus}>Status</DropdownItem>
        <DropdownItem onClick={songLink}>Song Links</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );

  const renderRowSubComponent = (row) => {
    const { title, cover, description } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardImg top src={cover} alt="Card image cap" />
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
        Header: "Size",
        Cell: (cellProps) => {
          return cellProps.row.original.file_size;
        },
        //accessor: "file_size",
      },
      {
        Header: "Description",
        //accessor: "description",
        Cell: (cellProps) => {
          return cellProps.row.original.description;
        },
      },
      {
        Header: "Fingerprint",
        //accessor: "fingerprint",
        Cell: (cellProps) => {
          {
            return cellProps.row.original.fingerprint ? (
              <CopyToClipboard
                text={cellProps.row.original.fingerprint}
                onCopy={() => setCopied(true)}
              >
                <button>
                  {copied ? "Fingerprint Copied" : "FingerPrinted"}{" "}
                </button>
              </CopyToClipboard>
            ) : null;
          }
        },
      },
      {
        Header: "Label",
        //accessor: "label_obj.title",
        Cell: (cellProps) => {
          {
            return `${
              cellProps.row.original.label_obj
                ? cellProps.row.original.label_obj.title
                : null
            } `;
          }
        },
      },
      {
        Header: "Share",
        //accessor: "sor",
        Cell: (cellProps) => {
          {
            return cellProps.row.original.royalties.length <= 0
              ? "No Royalties yet"
              : cellProps.row.original.royalties.map((r, i) => {
                  return `${cellProps.row.original.royalties[i].description}:${cellProps.row.original.royalties[i].share}, `;
                });
          }
        },
      },
      {
        Header: "Status",
        // accessor: "stage_name",
        Cell: (cellProps) => {
          return cellProps.row.original.subscription === null
            ? "Not in Subscription"
            : "In Subscription";
        },
      },
      {
        Header: "Date Uploaded",
        // accessor: "stage_name",
        Cell: (cellProps) => {
          return moment(cellProps.row.original.timestamp).format("MM/DD/YYYY");
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
              handleEditRow={(e) => {
                toggle();
                setId(cellProps.row.original.id);
                setReleasestartdate(cellProps.row.original.releaseStartDate);
                setPresalesdate(cellProps.row.original.preSalesDate);
                setReleaseenddate(cellProps.row.original.releaseEndDate);
                setTitle(cellProps.row.original.title);
                setDescription(cellProps.row.original.description);

                const x = [];
                const y = [];
                const z = {};
                for (
                  let index = 0;
                  index < cellProps.row.original.genres_obj.length;
                  index++
                ) {
                  x.push({
                    value: cellProps.row.original.genres_obj[index].title,
                    label: cellProps.row.original.genres_obj[index].title,
                    title: cellProps.row.original.genres_obj[index].title,
                  });
                }
                for (
                  let index = 0;
                  index < cellProps.row.original.genres_obj.length;
                  index++
                ) {
                  y.push({
                    value:
                      cellProps.row.original.access_availability_obj[index]
                        .title,
                    label:
                      cellProps.row.original.access_availability_obj[index]
                        .title,
                    title:
                      cellProps.row.original.access_availability_obj[index]
                        .title,
                  });
                }
                z.value = cellProps.row.original.label_obj.id;
                z.label = cellProps.row.original.label_obj.title;

                setGenres(x);
                setAccessavailability(y);
                setLabel(z);
              }}
              redistributeSong={(e) => {
                redistributeSong({
                  item: cellProps.row.original.id,
                  is_song: true,
                });
              }}
              songStatus={(e) => {
                songStatus({
                  target_id: cellProps.row.original.id,
                  is_album: false,
                  is_fingerprint_req: false,
                });
              }}
              songLink={(e) => {
                songLink({
                  target_id: cellProps.row.original.id,
                });
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
  const [cover, setCover] = useState([]);
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [music, setMusic] = useState(false);
  const [label, setLabel] = useState("");
  const [genres, setGenres] = useState(null);
  const [access_availability, setAccessavailability] = useState(null);
  const [id, setId] = useState("");
  const [releaseStartDate, setReleasestartdate] = useState("");
  const [preSalesDate, setPresalesdate] = useState("");
  const [releaseEndDate, setReleaseenddate] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [copied, setCopied] = useState(false);
  const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  };

  const thumb = {
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box",
  };

  const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden",
  };

  const img = {
    display: "block",
    width: "auto",
    height: "100%",
  };
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setCover(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  const thumbs = () => (
    <div style={thumb} key={cover[0].name}>
      <div style={thumbInner}>
        <img src={cover[0].preview} style={img} />
      </div>
    </div>
  );

  /*  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      URL.revokeObjectURL(file[0].preview);

    },
    [file]
  ); */
  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleLabel = (value) => {
    setLabel(value);
  };
  const handleGenre = (value) => {
    setGenres(value);
  };
  const handleAccess = (value) => {
    setAccessavailability(value);
  };

  const toggleModal = () => {
    setIsopen(!isOpen);
  };

  const toggle = () => {
    setModal(!modal);
  };
  const handleRelease = (value) => {
    setReleasestartdate(value);
  };
  const handleEnd = (value) => {
    setReleaseenddate(value);
  };
  const handleStart = (value) => {
    setPresalesdate(value);
  };

  const onSubmit = (values) => {
    const data = {
      label,
      genres,
      access_availability,
      description,
      title,
      releaseStartDate,
      preSalesDate,
      releaseEndDate,
      cover,
    };

    for (let index = 0; index < access_availability.length; index++) {
      delete access_availability[index].value;
      delete access_availability[index].label;
    }

    for (let index = 0; index < genres.length; index++) {
      delete genres[index].value;
      delete genres[index].label;
    }
    let genre = "";
    genres.forEach((g) => {
      genre += g.title + ",";
    });
    let access = "";
    access_availability.forEach((aa) => {
      access += aa.title + ",";
    });
    delete cover.preview;

    const formdata = new FormData();
    formdata.append("cover", cover);
    formdata.append("title", title);
    formdata.append("genres", genre);
    formdata.append("access_availability", access);
    formdata.append("description", description);
    formdata.append("releaseStartDate", releaseStartDate);
    formdata.append("releaseStartDate", releaseStartDate);
    formdata.append("preSalesDate", preSalesDate);
    formdata.append("label", label.value);
    editSong(formdata, id);
    setMusic(false);
    setModal(false);
  };
  const del = (e) => {
    e.preventDefault();
    deleteSong(id);
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
              background: "linear-gradient(45deg, #eb3349, #f45c43)",
              color: "#fff",
              fontWeight: "lighter",
              boxShadow: "-1px 1px 19px black",
              overflowX: "scroll",
            }}
          >
            <div className="card__title">
              <h5 className="bold-text">My Songs</h5>
              <h2 className="subhead">List of my song</h2>
            </div>
            <Container style={{ marginTop: 10 }}>
              <TableContainer
                columns={columns}
                data={songs || []}
                renderRowSubComponent={renderRowSubComponent}
              />
            </Container>
            <QuestionModal
              isOpen={isOpen}
              toggleModal={toggleModal}
              callback={del}
              title="Delete Song"
              content="Do you want to delete this Song"
            />
            <ActionModal
              isOpen={modal}
              toggleModal={toggle}
              title="Edit Song"
              callback={onSubmit}
              type="Update"
              children={
                <EditSong
                  genre={genre}
                  access={access}
                  labe={label}
                  access_availability={access_availability}
                  genres={genres}
                  labels={labels}
                  music={music}
                  handleLabel={handleLabel}
                  setMusic={setMusic}
                  initialValues={data}
                  releaseStartDate={releaseStartDate}
                  preSalesDate={preSalesDate}
                  releaseEndDate={releaseEndDate}
                  handleRelease={handleRelease}
                  handleStart={handleStart}
                  handleEnd={handleEnd}
                  handleGenre={handleGenre}
                  handleAccess={handleAccess}
                  title={title}
                  description={description}
                  addTitle={addTitle}
                  addDescription={addDescription}
                  getRootProps={getRootProps}
                  getInputProps={getInputProps}
                  thumbs={thumbs}
                  thumbsContainer={thumbsContainer}
                />
              }
            />
          </CardBody>
        </Card>
      </LoadingOverlay>
    </Col>
  );
};

export default connect(
  (state) => ({
    album: state.songs.album,
  }),
  { deleteSong, editSong, redistributeSong, songStatus, songLink }
)(MusicTable);
