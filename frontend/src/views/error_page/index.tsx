
import {useRouteError} from "react-router-dom";
import React from "react";

const ErrorPage: React.FC = () => {
    const error = useRouteError() as Error | undefined;
    console.log(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <h3>Error 404</h3>
            <h3>Page Not Found !!</h3>
            {error && (
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            )}
        </div>
    );
};

export default ErrorPage;