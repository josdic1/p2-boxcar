import App from "./App";
import Error from "./pages/Error";
import Home from "./components/Home";
import Item from "./pages/Item";
import Spin from "./pages/Spin";

const routes = [
    { path: '/', element: <App />, errorElement: <Error /> ,
        children: [
            { path: 'error', element: <Error /> },
            { path: 'home', element: <Home /> },
            { path: 'item/:id', element: <Item /> },
            { path: 'spin', element: <Spin /> }
        ]
    }
]

export default routes