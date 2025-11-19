import './ErrorPage.css';
import { Header } from "./Header";
export function ErrorPage({cart})
{
    return (
        <>
            <title>Page not found</title>
            <Header cart={cart}/>
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