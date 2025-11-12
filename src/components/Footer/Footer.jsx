import { BiLogoFacebookCircle } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { RxLinkedinLogo } from "react-icons/rx";



const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <h1 className='text-5xl font-bold mb-3'>Leafy<span className='text-primary'>Line</span></h1>
                <p>
                    ToyTime Industries Ltd.
                    <br />
                    Providing reliable toy since 2024.
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a >Educational Toy</a>
                <a >Arts & Creafts</a>
                <a>Dolls & Plush</a>
                <a >Vechicles & RC</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social Media Links</h6>
                <a className='flex gap-2 items-center'><BiLogoFacebookCircle/> Facebook</a>
                <a className='flex gap-2 items-center'><BsInstagram/> Instagram</a>
                <a className='flex gap-2 items-center'><RxLinkedinLogo/> Linkedin</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a >Terms of use</a>
                <a >Privacy policy</a>
                <a >Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;