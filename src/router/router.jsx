import { createHashRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/home";
import About from "../pages/about/about";


const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: < Home /> },
            { path: '/about', element: < About /> }
        ]
    },
    // { path: '*', element: <PageNotFound /> }
])

export default router;