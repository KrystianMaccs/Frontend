import React from "react";
import { Table } from "reactstrap";
const Profile = ({ beneficiary }) => {
  return beneficiary.profile.first_name &&
    beneficiary.profile.last_name &&
    beneficiary.profile.bio ? (
    <>
      <div className="profile__information">
        <div className="profile_data">
          <p className="profile__name">{`${beneficiary.profile.first_name} ${beneficiary.profile.last_name}`}</p>
          <p className="profile__work">{`${
            beneficiary.profile.is_verified ? "isVerified" : "Not Verified"
          }`}</p>
        </div>
      </div>
      <div>
        <Table responsive className="table--bordered">
          <tbody>
            <tr>
              <td>Email </td>
              <td>{beneficiary.username}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{beneficiary.profile.bio}</td>
            </tr>
            <tr>
              <td>Account Number</td>
              <td>{beneficiary.profile.account_number}</td>
            </tr>
            <tr>
              <td>Account Name</td>
              <td>{beneficiary.profile.bank_name}</td>
            </tr>
            <tr>
              <td>Phone Number </td>
              <td>{beneficiary.phone}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  ) : (
    "Update your profile"
  );
};

export default Profile;
