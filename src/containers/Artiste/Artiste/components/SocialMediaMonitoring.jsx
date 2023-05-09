import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Progress } from "reactstrap";
import Panel, { PanelTitle } from "../../../../shared/components/Panel";

class SocialScore extends PureComponent {
  static propTypes = {
    progress: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children, progress } = this.props;
    return (
      <div className="dashboard__social-stat-item">
        <div className="dashboard__social-stat-title">{children}</div>
        <div className="dashboard__social-stat-progress">
          <div className="progress-wrap progress-wrap--small progress-wrap--blue-gradient progress-wrap--rounded">
            <p className="progress__label">{progress}%</p>
            <Progress value={progress} />
          </div>
        </div>
      </div>
    );
  }
}

const SocialMediaMonitoring = ({ t }) => (
  <Panel
    md={12}
    lg={6}
    xl={5}
    xs={12}
    title="Social Media Monitoring"
    subhead="Total stats from Social Media"
  >
    <div className="dashboard__weekly-stat">
      <PanelTitle title="Data Collected" />
      <div className="dashboard__social-stat">
        <SocialScore progress={87}>Facebook</SocialScore>
        <SocialScore progress={65}>Twitter</SocialScore>
        <SocialScore progress={92}>Instagram</SocialScore>
        <SocialScore progress={81}>SnapChat</SocialScore>
      </div>
    </div>
  </Panel>
);

SocialMediaMonitoring.propTypes = {
  t: PropTypes.func.isRequired,
};

export default SocialMediaMonitoring;
