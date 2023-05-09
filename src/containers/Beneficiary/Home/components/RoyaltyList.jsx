/* eslint-disable react/no-array-index-key,react/no-typos */
import React, { useState, useMemo } from "react";
import { Container, Badge } from "reactstrap";
import Panel from "../../../../shared/components/Panel";
import { connect } from "react-redux";
import TableContainer from "../../../../shared/components/TableContainer";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const RoyaltyList = (props) => {


  const columns = useMemo(
    () => [
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Deduction",
        accessor: "deduction",
      },
      {
        Header: "Paid",
        accessor: "paid",
        Cell: (cellProps) => {
          return cellProps.row.original.paid ? (
            <Badge color="success">Paid</Badge>
          ) : (
            <Badge color="danger">Due</Badge>
          );
        },
      },
      {
        Header: "Failed",
        accessor: "failed",
        Cell: (cellProps) => {
          return cellProps.row.original.failed ? (
            <Badge color="success">Paid</Badge>
          ) : (
            <Badge color="danger">Due</Badge>
          );
        },
      },
    ],
    []
  );
  const renderRowSubComponent = (row) => {
    return null;
  };

  return props.beneficiary.profile.is_verified ? (
    <LoadingOverlay
      active={props.loading}
      spinner={<PlainLogo />}
      text="Please Wait..."
    >
      <Panel lg={12} title="Label List">
        <Container style={{ marginTop: 10 }}>
          <TableContainer
            columns={columns}
            data={props.benefit ? props.benefit.results : []}
            renderRowSubComponent={renderRowSubComponent}
          />
        </Container>
      </Panel>
    </LoadingOverlay>
  ) : (
    <Panel lg={12} title="Label List">
      {"Verify your bvn"}
    </Panel>
  );
};

export default connect((state) => ({}), {})(RoyaltyList);
