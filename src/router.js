import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboarad from './component/Dashboard/Dashboard';
import Inventory from './component/inventory/Inventory';
import Product from './component/product/Product';
import ProductAdd from './component//product/ProductAdd';
import WareHouse from './component/warehouse/WareHouse';
import Login from './component/Login/Login';
import Home from './component/Home/Home';

function Router(params) {
    return (
        <div>
            <Home>
            </Home>
            <BrowserRouter>
                <Switch>
                    <Route path="/Dashboard">
                        <Dashboarad />
                    </Route>
                    <Route path="/Inventory">
                        <Inventory />
                    </Route>
                    <Route path="/Product">
                        <Product />
                    </Route>
                    <Route path="/Warehouse">
                        <WareHouse></WareHouse>
                    </Route>
                    <Route path="/Add/Product">
                        <ProductAdd></ProductAdd>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router
