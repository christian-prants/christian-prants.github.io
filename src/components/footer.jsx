import IconGithub  from '../assets/icon/github.svg?react';
import IconLinkedIn from '../assets/icon/linkedin.svg?react';


const Footer = () => {
    return (
        <div className="footer">
            <IconGithub className="icon --adjust" />
            <IconLinkedIn className="icon" />
        </div>
    )
}

export default Footer;