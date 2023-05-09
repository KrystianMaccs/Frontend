import { PureComponent } from "react";
import PropTypes from "prop-types";

class ScrollToTop extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    children: PropTypes.element.isRequired,
  };

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default ScrollToTop;
