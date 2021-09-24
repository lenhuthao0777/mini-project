import AdminRoute from "auth/AdminRoute";
import AdminLayout from "layouts/AdminLayout";
import AppLayout from "layouts/AppLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("pages/Home"));
const AdminLogin = lazy(() => import("pages/Admin/AdminLogin"));
const AdminProducts = lazy(() => import("pages/Admin/AdminProducts"));
const AddProduct = lazy(() => import("pages/Admin/AdminFormAdd"));
const NotFound = lazy(() => import("pages/NotFound"));
function App() {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/admin">
                        <AdminLayout>
                            <Switch>
                                <Redirect exact from="/admin" to="/admin/products" />
                                <AdminRoute path="/admin/products">
                                    <AdminProducts />
                                </AdminRoute>
                                <AdminRoute path="/admin/add">
                                    <AddProduct />
                                </AdminRoute>
                            </Switch>
                        </AdminLayout>
                    </Route>
                    <Route path="/admin-login">
                        <AdminLogin />
                    </Route>
                    <Route path="/">
                        <AppLayout>
                            <Switch>
                                <Route path="/" exact>
                                    <Home />
                                </Route>
                                <Route>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </AppLayout>
                    </Route>
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
