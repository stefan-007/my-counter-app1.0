import React from 'react'
// import { Link } from 'react-router-dom';
import "../styles/404.css";
function Error404() {
    return (
        <div class="landing">
            <div class="text-box">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                {/* <Link to="/"><div>Go Home</div></Link> */}
            </div>
        </div>
    )
}

export default Error404