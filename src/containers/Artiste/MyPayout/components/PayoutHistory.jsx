import React from "react";
import moment from "moment"
import classNames from "classnames";
import DatePicker from "react-datepicker";
import { Table, Card, CardBody, Button } from "reactstrap";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const searchClass = classNames({
  "topbar__search-field": true,
  "topbar__search-field--open": true,
});

const PayoutHistory = ({
  handleHistory,
  year,
  getHistory,
  history,
  isLoading,
}) => {
  return (
    <>
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
            <DatePicker
              selected={year}
              onChange={
                handleHistory
              }
              className={searchClass}
              showYearPicker
              dateFormat="yyyy"
              //onSelect={getHistory}
              placeholderText={"Select year...."}
            //disabled
            />
            <Button color="primary" onClick={getHistory}>Search</Button>
            <Table
              responsive
              className="table--bordered dashboard__table-crypto"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Net Profit</th>
                  <th>Gross Profit</th>
                  <th>Total Deduction</th>
                  <th>Royalty cut</th>
                  <th> Paid</th>
                  <th>Failed</th>
                  <th>Pay Due</th>
                </tr>
              </thead>
              {history === null ? (
                "No history for this year"
              ) : (
                  <tbody>
                    {history.results.map((h, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{h.net_profit}</td>
                          <td dir="ltr">{h.gross_profit}</td>
                          <td dir="ltr">{h.total_deduction}</td>
                          <td dir="ltr">{h.royalty_cut}</td>
                          <td dir="ltr">{h.paid ? "Paid" : "Not Paid"}</td>
                          <td>{h.failed ? "Failed" : ""}</td>
                          <td>{moment(h.pay_due).format('YYYY-MM-DD')}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
            </Table>
          </CardBody>
        </Card>
      </LoadingOverlay>
    </>
  );
};
export default PayoutHistory;
