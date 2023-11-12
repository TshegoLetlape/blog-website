import React from react;
import './SideNavbar.css';

const SideNavbar = () =>{
    const [isExpended, setExpendState]=useState(false);
    const menuItems=[
        {
            text: 'Home',
        icon: 'icons/grid.svg',
    },
        {
            text: 'About Us',
        icon: 'icons/user.svg',
    },
        {
            text: 'Fashion',
        icon: 'icons/message.svg',
    },
        {
            text: 'Food',
        icon: 'icons/pie-chart.svg',
    },
          {
            text: 'Contact Us',
        icon: 'icons/folder.svg',
    },
    
    ]
    return(
        <div className={isExpended?'side-nav-container' : 'side-nav-container side-nav-container-NX'}>
            <div className='nav-upper'>
                <div className='nav-heading'>
                  {isExpended &&(  <div className='nav-brand'>
                        <img src='images/logo.vsg' alt='logo'/>
                        <h2>Blog name</h2>

                    </div>)}
                    <button className={isExpended?'hamburger hamburger-in' : 'hamburger humberger-out'}onClick={() => setExpendState(!isExpended)} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className='nav-menu'>{menuItems.map(({text, icon}) =>(
                <a href='#'className={isExpended? 'menu-item' :'menu-item menu-item-NX'}>
                    <img src={icon} alt='' srcset=''/>
                    {isExpended && <p>{text}</p>}
                    {!isExpended &&<div className='tooltip'>{text}</div>}
                </a>
                ))}

                </div>
            </div>
            <div className='nav-footer'>
               {isExpended &&<div className='nav-details'>
                    <img src='icons/admin-avator.sgv' alt=''/>
                    <div className='nav-footer-info'>
                        <p className='nav-footer-user-name'>
                            B Nkwane
                        </p>

                    </div>
                </div>}
                <img className='logout-icon' src='icons/logout.sgv'/>
            </div>


        </div>
    )
}
export default SideNavbar;
