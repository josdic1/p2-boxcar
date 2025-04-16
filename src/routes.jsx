import App from "./App";
import Error from "./pages/Error";
import Item from "./pages/Item";

const routes = [
    { path: '/', element: <App />, errorElement: <Error /> ,
        children: [
            { path: 'error', element: <Error /> },
            { path: 'item/:id', element: <Item /> }
        ]
    }
]

export default routes