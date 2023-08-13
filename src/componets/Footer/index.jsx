import './Footer.css'


const Footer = () => {
    return (

        <footer className='footer' style={{backgroundImage: "url(/img/footer.png)"}}>

            <div className='redes'>

                <a href="https://www.facebook.com/profile.php?id=100080958376396">
                    <img src="/img/facebook.svg" alt="Facebook" />
                </a>

                <a href="https://twitter.com/Martin1240_">
                    <img src="/img/twitter.svg" alt="Twitter" />
                </a>

                <a href="https://www.instagram.com/delatorremartin1240/">
                    <img src="/img/instagram.svg" alt="Instagram"/>
                </a>

            </div>

            <img src="/img/Logo.svg" alt="Logo" />
            <strong>Desarrollado por Martin de la torre</strong>

        </footer>
    )
}

export default Footer;