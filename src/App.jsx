import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import NotFound from "./NotFound.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [{
            path: '/',
            element: <Home/>
        },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/projecten',
                element: <Projects/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/*',
                element: <NotFound/>
            }
        ]
    }
],
    {
        basename: "/Portfolio",
    }
);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;