import App from "./App";
import Error from "./pages/Error";
import Home from "./components/Home";
import Item from "./pages/Item";
import EditForm from "./pages/EditForm";
import NewForm from "./pages/NewForm";
import Spin from "./pages/Spin";

const routes = [
    { path: '/', element: <App />, errorElement: <Error /> ,
        children: [
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Home /> },
            { path: 'item/:id', element: <Item /> },
            { path: 'edit/:id', element: <EditForm /> },
            { path: 'new', element: <NewForm /> },
            { path: 'spin', element: <Spin /> }
        ]
    }
]

export default routes