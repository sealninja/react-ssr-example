import React from 'react';
import {
  I18n, Translate, Localize, t, setLocale,
} from 'react-i18nify';

function I18nify() {
  return (
    <>
      <p>
        <button type="button" onClick={() => setLocale('en')}>
          English
        </button>
        <button type="button" onClick={() => setLocale('nl')}>
          Dutch
        </button>
      </p>
      <p>
        <Translate value="title" />
      </p>
      <p>
        <Localize value={new Date()} dateFormat="date" />
      </p>
      <p>
        <I18n render={() => <input placeholder={t('title')} />} />
      </p>
    </>
  );
}

export default I18nify;
