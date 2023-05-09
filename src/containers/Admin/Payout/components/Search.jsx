import React from "react";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { Button, Table, Col } from "reactstrap";
import Panel from "../../../../shared/components/Panel";
import moment from 'moment';
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";
import { numberWithCommas } from "../../../../redux/actions/helpers"

const searchClass = classNames({
  "topbar__search-field": true,
  "topbar__search-field--open": true,
});

const Search = ({
  handleChange,
  startDate,
  getPayout,
  list,
  triggerPlug,
  disemburse,
  isLoading
}) => {
  return (
    <>
      <Col lg="12">
        <LoadingOverlay
          active={isLoading}
          spinner={<PlainLogo />}
          text="Please Wait..."
        >
          <Panel lg={12} title="Payout Search List">
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              dateFormat="MM/yyyy"
              className={searchClass}
              showMonthYearPicker
            // onSelect={getPayout}
            />
            <Button color="primary" onClick={getPayout}>Search</Button>
            <Table responsive className="table--bordered dashboard__table-crypto">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Amount(NGN)</th>
                  <th>Payment Due</th>
                  <th>No. of Songs</th>
                  <th>Triggered</th>
                  <th>Last Triggered</th>
                  <th>Action</th>
                  <th />
                </tr>
              </thead>
              {list === null ? (
                "No payout for the month"
              ) : (
                  <tbody>
                    <tr>

                      <td>1</td>
                      <td>{list.amount === null ? "0" : numberWithCommas(list.amount)}</td>
                      <td dir="ltr">{moment(list.pay_due).format('YYYY-MM-DD')}</td>
                      <td dir="ltr">
                        {!list.song_tracked_count ? "no songs" : list.song_tracked_count}
                      </td>
                      <td dir="ltr">{!list.triggered ? "Not Yet Triggered" : "Has been tiggered"}</td>
                      <td dir="ltr">
                        {!list.last_triggered ? "Not Yet Triggered" : moment(list.last_triggered).format('YYYY-MM-DD')}
                      </td>
                      <td>
                        <Button onClick={triggerPlug}>Trigger</Button>
                        <Button onClick={disemburse}>Payout</Button>
                      </td>
                    </tr>
                  </tbody>
                )}
            </Table>
          </Panel>
        </LoadingOverlay>
      </Col>
    </>
  );
};
export default Search;
