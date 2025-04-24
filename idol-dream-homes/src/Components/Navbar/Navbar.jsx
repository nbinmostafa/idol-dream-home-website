import './Navbar.css';
import logo from "./Project.png";


 
function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between px-8 z-50 "> 
            
            
                <img src={logo} alt="Logo" className="size-40 m-3 md:size-30 2xl:size-60"/>
            
            
            <div className='flex justify-center p-5 h-15 w-150 shrink 2xl:w-300'>
                <ul className="flex gap-30 text-amber-50 font-mono text-md font-semibold md:text-sm md:gap-20 md:font-mono 2xl:text-sm 2xl:gap-70 2xl:">
                    <li className='shrink'><a href="#home">Home</a></li>
                    <li className='shrink'><a href="#about">About</a></li>
                    <li className='shrink'><a href="#projects">Projects</a></li>
                    <li className='shrink'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
        </nav>
    );
}
export default Navbar;  