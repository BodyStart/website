import '../assets/css/footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer class="footer">
            <hr class="footer-hr" />
            <div class="footer-content">
                <p>BODYSTART</p>
                <div class="wrapper">
                    <ul class="icon-list">
                        <li class="item"><a href="https://www.instagram.com/adam_.lc/"><i class="fa-brands fa-instagram icon"></i></a></li>
                        <li class="item"><a href="tel:0761847580"><i class="fa-brands fa-whatsapp icon"></i></a></li>
                        <li class="item"><a href="mailto:bodystartpro@gmail.com"><i class="fas fa-envelope icon"></i></a></li>
                        <li class="item"><a href="https://discord.gg/rhGMPCQM"><i class="fa-brands fa-discord icon"></i></a></li>
                    </ul>
                </div>
                <p>©{year} Bodystart</p>
            </div>
        </footer>
    );
}
export default Footer;