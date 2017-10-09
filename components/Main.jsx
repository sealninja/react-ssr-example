import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import GridSystem from './GridSystem.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

class ExampleComponent extends React.Component {
  static propTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    serverSideScreenClass: 'xl',
  }

  static childContextTypes = {
    serverSideScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: PropTypes.arrayOf(PropTypes.number),
  };

  getChildContext = () => ({
    serverSideScreenClass: this.props.serverSideScreenClass,
    breakpoints: [576, 768, 800, 1200],
  });

  render = () => (
    <Container>
      <h1>React grid system</h1>
      <GridSystem />

      <h1>React responsive utilities</h1>
      <ResponsiveUtilities />
    </Container>
  );
}

export default ExampleComponent;
