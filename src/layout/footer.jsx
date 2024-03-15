import React from "react";

function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} {}
                SHEVCHENKO ANDREW TKBO-01-22
            </div>
        </div>
    </footer>
}

export { Footer };