import '../../public/assets/css/footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <hr className="footer-hr" />
            <div className="footer-content">
                <div className="wrapper">
                    <ul className="icon-list">
                        <li className="item"><a href="https://www.instagram.com/adam_.lc/"><i className="fa-brands fa-instagram icon"></i></a></li>
                        <li className="item"><a href="tel:0761847580"><i className="fa-brands fa-whatsapp icon"></i></a></li>
                        <li className="item"><a href="mailto:bodystartpro@gmail.com"><i className="fas fa-envelope icon"></i></a></li>
                        <li className="item"><a href="https://discord.gg/rhGMPCQM"><i className="fa-brands fa-discord icon"></i></a></li>
                    </ul>
                </div>
                <p>©{year} BodyStart</p>
            </div>
        </footer>
    );
}
export default Footer;