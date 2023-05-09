import React from "react";
import { Card, CardBody, Col, Table, ButtonToolbar } from "reactstrap";
import AssignStorage from "./AssignStorage";

const ArtistStorageUsageList = ({ modal, toggle }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Storage</h5>
          <h5 className="subhead">
            Artiste Storage 
            <span className="red-text"> Usage</span>
          </h5>
        </div>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Artist Name</th>
              <th>Space Assigned</th>
              <th>Space Used</th>
              <th>Last Upload</th>
              <th>Memory Space Remaining</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>200mb</td>
              <td>66mb</td>
              <td>1990/12/01</td>
              <td>134mb</td>
              <td>
                <ButtonToolbar>
                  <AssignStorage
                    modal={modal}
                    toggle={toggle}
                    form="assign_form"
                    onSubmit
                  />
                </ButtonToolbar>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>200mb</td>
              <td>66mb</td>
              <td>1990/12/01</td>
              <td>134mb</td>
              <td>
                <ButtonToolbar>
                  <AssignStorage
                    modal={modal}
                    toggle={toggle}
                    onSubmit
                    form="assign_form"
                  />
                </ButtonToolbar>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>200mb</td>
              <td>66mb</td>
              <td>1990/12/01</td>
              <td>134mb</td>
              <td>
                <ButtonToolbar>
                  <AssignStorage
                    modal={modal}
                    toggle={toggle}
                    form="assign_form"
                    onSubmit
                  />
                </ButtonToolbar>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>200mb</td>
              <td>66mb</td>
              <td>1990/12/01</td>
              <td>134mb</td>
              <td>
                <ButtonToolbar>
                  <AssignStorage
                    modal={modal}
                    toggle={toggle}
                    form="assign_form"
                    onSubmit
                  />
                </ButtonToolbar>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

ArtistStorageUsageList.propTypes = {};

export default ArtistStorageUsageList;
