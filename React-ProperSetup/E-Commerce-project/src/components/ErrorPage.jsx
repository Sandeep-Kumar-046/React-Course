import './ErrorPage.css';
import { Header } from "./Header";
export function ErrorPage()
{
    return (
        <>
            <title>Page not found</title>
            <Header/>
            <div className="container">
                <h1 className="error-message">404</h1>
                <p>
                    Oops! The page you're
                    looking for is not here.
                </p>
            </div>
        </>
    );
}