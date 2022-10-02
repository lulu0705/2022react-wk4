import DensityMedium from '@mui/icons-material/DensityMedium';
import Clear from '@mui/icons-material/Clear';

export default function HamMenu({onClick, open}) {
    return (
       <>
          {open ? (
            <span onClick={onClick} className="ham-menu show-mobile">
               <Clear className="ham-menu-bar ham-menu-bar-touch"/>
            </span>
          ):(
            <span onClick={onClick} className="ham-menu show-mobile">
               <DensityMedium className="ham-menu-bar"/>
            </span>
          )}
       </>
    );
 }