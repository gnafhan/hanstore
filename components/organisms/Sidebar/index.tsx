import Profile from "./profile"
import SidebarFooter from "./SidebarFooter"
import MenuItem from "./MenuItem"

interface SidebarProps {
    activeMenu: string;
}
export default function Sidebar(props: SidebarProps) {
    const {activeMenu}=props;
    return (
        <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
           <Profile/>
            <div className="menus">
                <MenuItem title="Overview" icon="icon-menu-overview" active={activeMenu === 'overview'} href="/member"/>
                <MenuItem title="Transaction" icon="icon-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions"/>
                <MenuItem title="Messages" icon="icon-menu-messages"href="/member"/>
                <MenuItem title="Card" icon="icon-menu-cards"href="/member"/>
                <MenuItem title="Rewards" icon="icon-menu-rewards"href="/member"/>
                <MenuItem title="Settings" icon="icon-menu-settings"active={activeMenu ==="settings"} href="/member/edit-profile"/>
                <MenuItem title="Log Out" icon="icon-menu-logout"href="/sign-in"/>
            </div>
            <SidebarFooter/>
        </div>
    </section>
    )
}
