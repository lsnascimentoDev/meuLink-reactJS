import './menu.css'
import {BsGithub,  BsLinkedin} from 'react-icons/bs'
import {Link} from 'react-router-dom'

export default function Menu(){
    return (
        <div className="menu">
            <a className="social" href="https://github.com/lsnascimentoDev">
            <BsGithub color="#FFF" size={24}/>
            </a>
            <a className="social" href="https://www.linkedin.com/in/lucas-nascimento-2630a71b1/">
                <BsLinkedin color="#FFF" size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}
 