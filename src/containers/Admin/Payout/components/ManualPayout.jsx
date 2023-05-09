/* eslint-disable react/no-array-index-key,react/no-typos */
import React from "react";
import Select from "react-select";
import classNames from "classnames";
import DatePicker from "react-datepicker";
import {
    Col,
    Card,
    Table,
    Button,
    CardBody,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    UncontrolledDropdown,
} from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DotsHorizontalIcon from "mdi-react/DotsHorizontalIcon";
import {
    addCharge,
    deleteCharge,
} from "../../../../redux/actions/payoutActions";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import PlainLogo from "../../../../shared/components/PlainLogo";

const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className="dashboard__total-tooltip">
                <p className="label">{`$${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
        })
    ),
};

CustomTooltip.defaultProps = {
    active: false,
    payload: null,
};

const searchClass = classNames({
    "topbar__search-field": true,
    "topbar__search-field--open": true,
});
const Manualpayout = ({
    nex,
    manualSwitch,
    startDate,
    handleManual,
    manual,
    isLoading,
    handleChange
}) => {
    return (
        <>
            <Col lg="12">
                <LoadingOverlay
                    active={isLoading}
                    spinner={<PlainLogo />}
                    text="Please Wait..."
                >
                    <Card className="card--not-full-height">
                        <CardBody
                            style={{
                                background: "linear-gradient(45deg, #36d1dc, #5b86e5)",
                                //  color: "#fff",
                                fontWeight: "lighter",
                                boxShadow: "-1px 1px 19px black",
                            }}
                        >
                            <div className="form__form-group">
                                <span className="form__form-group-label">Manual Payment</span>

                                <Select
                                    options={[
                                        { value: "artists", label: "Artiste", id: "artist_payout_id" },
                                        { value: "royalty", label: "Royalty", id: "royalty_payout_id" },
                                    ]}
                                    value={manual}
                                    onChange={handleManual}
                                />
                            </div>

                            {nex === 1 ? (
                                <>

                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleChange}
                                        dateFormat="MM/yyyy"
                                        className={searchClass}
                                        showMonthYearPicker
                                    //disabled
                                    />
                                    <Button color="primary" onClick={manualSwitch}>Pay Manually</Button>

                                </>
                            ) : null}
                        </CardBody>
                    </Card>
                </LoadingOverlay>
            </Col>
        </>
    );
};

export default connect((state) => ({}), { addCharge, deleteCharge })(
    Manualpayout
);
