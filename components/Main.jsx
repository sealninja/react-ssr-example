import React from 'react';
import PropTypes from 'prop-types';
import { setConfiguration, Container } from 'react-grid-system';
import { setLocale, setTranslations } from 'react-i18nify';
import GridSystem from './GridSystem.jsx';
import I18nify from './I18nify.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

class ExampleComponent extends React.Component {
  static propTypes = {
    defaultScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  };

  static defaultProps = {
    defaultScreenClass: 'xl',
  }

  constructor(props) {
    super(props);
    setTranslations({
      en: {
        title: 'Awesome app with i18n!',
        date: 'MMMM do, YYYY',
      },
      nl: {
        title: 'Toffe app met i18n!',
        date: 'd MMMM YYYY',
      },
    });
    setLocale('en');
    setConfiguration({
      defaultScreenClass: props.defaultScreenClass,
      breakpoints: [576, 768, 800, 1200],
    });
  }

  render = () => (
    <Container>
      <h1>
React grid system
      </h1>
      <GridSystem />

      <h1>
React responsive utilities
      </h1>
      <ResponsiveUtilities />

      <h1>
React-i18nify
      </h1>
      <I18nify />
    </Container>
  );
}

export default ExampleComponent;
