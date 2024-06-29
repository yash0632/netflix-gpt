import {Browse} from './Browse.jsx';
import {Login} from './Login.jsx';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
 
 function Body(){
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/Browse',
            element:<Browse/>
        }
    ])

    return(
        
        <div>
            <RouterProvider router = {appRouter}/>
            
        </div>
    )
}
export default Body