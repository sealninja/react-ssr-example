import React from 'react';
import PropTypes from 'prop-types';
import { ScreenClassProvider, Container } from 'react-grid-system';
import { addLocales, setLocale, setTranslations } from 'react-i18nify';
import en from 'date-fns/locale/en-US';
import nl from 'date-fns/locale/nl';
import GridSystem from './GridSystem.jsx';
import I18nify from './I18nify.jsx';
import ResponsiveUtilities from './ResponsiveUtilities.jsx';

function App({ fallbackScreenClass }) {
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
  addLocales({ nl, en });
  setLocale('nl', false);

  return (
    <ScreenClassProvider fallbackScreenClass={fallbackScreenClass}>
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

App.propTypes = {
  fallbackScreenClass: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
};

App.defaultProps = {
  fallbackScreenClass: 'xl',
};

export default App;
