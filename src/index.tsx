import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.sass';
import reportWebVitals from './reportWebVitals';
import SellerForm from './components/seller-form';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en.json";
import common_ar from "./translations/ar.json";
import { BrowserRouter } from 'react-router-dom';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    ar: {
      common: common_ar
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/store/become-seller'>
      <I18nextProvider i18n={i18next}>
        <Provider store={store}>
          <SellerForm />
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
