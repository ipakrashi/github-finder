import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()

    return (
        <footer className='footer p-10 bg-gray-700 text-primary footer-center text-white '>
            Copyright &copy; {footerYear} All Rights Reserved
        </footer>
    )
}

export default Footer
