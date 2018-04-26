import React from 'react';
import { I18n, Translate, t, setLocale } from 'react-i18nify';

const Input = () => <input placeholder={t('title')} />;

const I18nify = () => (
  <React.Fragment>
    <p>
      <button onClick={() => setLocale('en')}>English</button>
      <button onClick={() => setLocale('nl')}>Dutch</button>
    </p>
    <p>
      <I18n><Input /></I18n>
    </p>
    <p>
      <I18n><input placeholder={t('title')} /></I18n>
    </p>
    <p>
      <Translate value="title" />
    </p>
  </React.Fragment>
);

I18nify.title = 'I18nify';

export default I18nify;
