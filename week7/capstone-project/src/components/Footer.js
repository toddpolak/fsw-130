import React from "react"

function Footer() {
    return (
        <footer>
            <span>
                &copy; {`${new Date().getFullYear()} Webdev Student`}
            </span>
        </footer>
    )
}

export default Footer
