import React from 'react';
import PropTypes from 'prop-types';
import { setConfiguration, ScreenClassProvider, Container } from 'react-grid-system';
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
        date: 'MMMM do, yyyy',
      },
      nl: {
        title: 'Toffe app met i18n!',
        date: 'd MMMM yyyy',
      },
    });
    setLocale('en');
    setConfiguration({
      defaultScreenClass: props.defaultScreenClass,
      breakpoints: [576, 768, 800, 1200],
    });
  }

  render = () => (
    <ScreenClassProvider>
      <Container>
        <h1>
          React Grid System
        </h1>
        <h2>
          Grid
        </h2>
        <GridSystem />

        <h2>
          Responsive utilities
        </h2>
        <ResponsiveUtilities />

        <h1>
          React I18nify
        </h1>
        <I18nify />
      </Container>
    </ScreenClassProvider>
  );
}

export default ExampleComponent;
