import React from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { Table, Button, Col } from "reactstrap";
import Panel from "../../../../shared/components/Panel";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const searchClass = classNames({
  "topbar__search-field": true,
  "topbar__search-field--open": true,
});

const PayoutHistory = ({ handleHistory, year, getHistory, history, isLoading }) => {
  return (
    <>
      <Col lg="12">
        <LoadingOverlay
          active={isLoading}
          spinner={<PlainLogo />}
          text="Please Wait..."
        >
          <Panel lg={12} title="Payout History">
            <DatePicker
              selected={year}
              onChange={handleHistory}
              className={searchClass}
              showYearPicker
              dateFormat="yyyy"
            />
            <Button onClick={getHistory} color="primary">Search</Button>
            <Table responsive className="table--bordered dashboard__table-crypto">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Total paid</th>
                  <th>Paid Artistes</th>
                  <th>Paid Artiste Royalty</th>
                  <th>Gross</th>
                  <th>Artiste Count</th>
                  <th>Royalty Count</th>
                </tr>
              </thead>
              {history === null || history.results === [] ? (
                "No history for this year"
              ) : (
                  <tbody>
                    {history.results.map((h, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{h.total_paid}</td>
                          <td dir="ltr">{h.paid_artists}</td>
                          <td dir="ltr">{h.paid_artist_royalty}</td>
                          <td dir="ltr">{h.gross}</td>
                          <td dir="ltr">{h.artists_count}</td>
                          <td>{h.royalty_count}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
            </Table>
          </Panel>
        </LoadingOverlay>
      </Col>
    </>
  );
};
export default PayoutHistory;
