import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import ClientsTable from './clients/clients.table';
import AddClient from './clients/add_client';
import LogIn from './admin/admin.login';
import SignIn from './admin/admin.signin';
import PurchasesTable from './purchases/purchases.table';
import ProductsTable from './products/products.table';
import AddProduct from './products/add_product';
import StoreMenu from './store/store.menu';
import Store from './store/store';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="admin">
          <Menu />
          <IonRouterOutlet id="admin">
            <Route path="/" exact={true}>
              <Redirect to="/login" />
            </Route>
            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>
            <Route path="/clients" exact={true}>
              <ClientsTable />
            </Route>
            <Route path="/purchases" exact={true}>
              <PurchasesTable />
            </Route>
            <Route path="/products" exact={true}>
              <ProductsTable />
            </Route>
            <Route path="/client/:id" exact={true}>
              <AddClient />
            </Route>
            <Route path="/product/:id" exact={true}>
              <AddProduct />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
        <Route path="/signin" exact={true}>
          <SignIn />
        </Route>
        <Route path="/login" exact={true}>
          <LogIn />
        </Route>
        <Route path="/store" exact={true}>
          <Store />
        </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
