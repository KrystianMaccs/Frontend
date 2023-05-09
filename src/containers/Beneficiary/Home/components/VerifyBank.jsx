import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Popover,
  PopoverBody,
  ButtonToolbar,
  PopoverHeader,
} from "reactstrap";
import BankForm from "../../../../shared/components/login/BankForm";
import {
  bankBenefit,
  reverseBack,
} from "../../../../redux/actions/beneficiaryAction";
import { connect } from "react-redux";

class verifyBank extends PureComponent {
 
  state = {
    status: null,
    popoverOpen: false,
  };

  onSubmit = (data) => {
    for (var value in data) {
      if (data[value] == null) {
        this.setState({ status: 101 });
      }
    }

    data.bank_code = data.bank_name.code;
    data.bank_name = data.bank_name.label;
    this.props.bankBenefit(data);
  };

  toggle = () => {
    this.setState((prevState) => ({ popoverOpen: !prevState.popoverOpen }));
  };

  render() {
    const { popoverOpen } = this.state;
    const { token, isVerified, engaged, loading } = this.props;
    return (
      <>
        <h4
          className="account__title"
          style={{ textAlign: "center", marginTop: "12px" }}
        >
          Verify with your BVN
        </h4>

        <BankForm onSubmit={this.onSubmit} form="bank_form" />
        <div className="account__have-account">
          <p style={{ fontSize: "15px" }}>
            Powered by {"          "}
            <img
              src="https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/7251e4f.png"
              alt="mcsn"
              style={{
                width: "100px",
              }}
            />
          </p>
        </div>
        <div className="account__have-account">
          <ButtonToolbar className="btn-toolbar--center">
            <Button
              id="PopoverLeft"
              onClick={this.toggle}
              outline
              className="button-tooltip"
            >
              Terms and Conditions
            </Button>
            <Popover
              placement="left"
              isOpen={popoverOpen}
              target="PopoverLeft"
              toggle={this.toggle}
            >
              <PopoverHeader>Terms and Conditions</PopoverHeader>
              <PopoverBody>
                This application is authorized by
                <b>The MUSICAL COPYRIGHT SOCIETY NIGERIA (MCSN)</b> and
                protected by <b>PAYSTACK</b> . This application aims at stopping
                musical copyright infringement as a result of this we will use
                <b> BVN BANK VERIFICATION NUMBER </b> to verify user IDENTITIES.
                PLEASE NOTE: BANK VERIFICATION NUMBERS OF USERS ARE NEITHER
                STORED OR DISTRIBUTED. THE BANK VERIFICATION NUMBERS MUST MATCH
                THE NAMES AND ACCOUNT NUMBERS PROVIDED FOR VERIFICATION TO BE
                VALID
              </PopoverBody>
            </Popover>
          </ButtonToolbar>
        </div>
        <div className="account__have-account">
          <p style={{ fontSize: "15px" }}>
            <img
              src="https://s3-us-west-2.amazonaws.com/app.gocreateafrica.com/media/paystack+logo.png"
              alt="paystack"
              style={{
                width: "100px",
              }}
            />
          </p>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.beneficiary.loading,
  token: state.beneficiary.token,
  profile: state.beneficiary.beneficiary.profile,
  isVerified: state.beneficiary.isVerified,
  engaged: state.beneficiary.engaged,
});
export default connect(mapStateToProps, { bankBenefit, reverseBack })(
  verifyBank
);
