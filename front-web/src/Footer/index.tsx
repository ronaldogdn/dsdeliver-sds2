import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
function Footer(){
    return (
        <footer className="main-footer">
        App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
        <div className="footer-icons">
            <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/school/DevSupeior/" target="_new">
                <InstagramIcon />
            </a>
            <a href="https://www.instagram.com/devsupeior.ig/" target="_new">
                <InstagramIcon/>
            </a>
        </div>
        </footer>
    )
}

export default Footer;