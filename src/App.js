import logo from './logo.svg';
import './App.css';
// import { Trans } from 'react-i18next';
import { useState } from 'react';
import { withTranslation } from 'react-i18next'

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
}

function App({ t, i18n }) {
  const [count, setCounter] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {Object.keys(lngs).map((lng) => {
            return (<button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => { i18n.changeLanguage(lng); setCounter(count + 1) }}> {lngs[lng].nativeName}

            </button>)
          })}
        </div>
        <p>
          <i>{t('counter', { count })}</i>
        </p>
        <p>
          {/* <Trans i18nKey={"description.part1"}>
            Edit <code>src/App.js</code> and save to reload.
          </Trans> */}
          {t('description.part1')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('description.part2')}
        </a>
      </header>
    </div>
  );
}

export default withTranslation()(App);
