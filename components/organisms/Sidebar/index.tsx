import Profile from "./profile"
import SidebarFooter from "./SidebarFooter"
import MenuItem from "./MenuItem"
export default function Sidebar() {
    return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
           <Profile/>
            <div className="menus">
                <MenuItem title="Overview" icon="icon-menu-overview" active/>
                <MenuItem title="Transaction" icon="icon-menu-transaction"/>
                <MenuItem title="Messages" icon="icon-menu-messages"/>
                <MenuItem title="Card" icon="icon-menu-cards"/>
                <MenuItem title="Rewards" icon="icon-menu-rewards"/>
                <MenuItem title="Settings" icon="icon-menu-settings"/>
                <MenuItem title="Log Out" icon="icon-menu-logout"/>
            </div>
            <SidebarFooter/>
        </div>
    </section>
    )
}
