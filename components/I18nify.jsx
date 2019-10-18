import React from 'react';
import {
  I18n, Translate, Localize, t, setLocale,
} from 'react-i18nify';

const I18nify = () => (
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

I18nify.title = 'I18nify';

export default I18nify;
