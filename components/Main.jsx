import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-grid-system';
import { setLocale, setTranslations } from 'react-i18nify';
import GridSystem from './GridSystem.jsx';
import I18nify from './I18nify.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

setTranslations({
  en: {
    title: 'Awesome app with i18n!',
    date: 'MMMM Do, YYYY',
  },
  nl: {
    title: 'Toffe app met i18n!',
    date: 'D MMMM YYYY',
  },
});

setLocale('en');

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

      <h1>React-i18nify</h1>
      <I18nify />
    </Container>
  );
}

export default ExampleComponent;
