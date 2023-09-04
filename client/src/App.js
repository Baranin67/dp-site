import './commons/style/main.css';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { default as ROUTES } from './routes.json';

import { HomePage } from './pages/home';
import { ShopPage } from './pages/shop';
import { RanksPage } from './pages/ranks';
import { DiscordPage } from './pages/discord';
import { LoginPage } from './pages/login';
import { UnknownPage } from './pages/unknown';

/*
  TODO: Nagłówek Sklepu ("SKLEP", czy coś podobnego).
  TODO: Dokończyć resztę animacji na Stronie głównej (sekcja ze statystykami).
*/

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.pages.home} element={<HomePage />} />
        <Route path={ROUTES.pages.shop} element={<ShopPage />} />
        <Route path={ROUTES.pages.ranks} element={<RanksPage />} />
        <Route path={ROUTES.pages.discord} element={<DiscordPage />} />
        <Route path={ROUTES.pages.login} element={<LoginPage />} />
        <Route path="*" element={<UnknownPage />} />``
      </Routes>
    </BrowserRouter>
  );
}

export default App;
