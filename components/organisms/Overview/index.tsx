import Category from "./Category"
import TableRow from "./TableRow"
export default function Overview() {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <Category icon = "ic-dekstop" nominal= {18000500}>
                                Game
                                <br/>
                                Dekstop
                            </Category>
                            <Category icon = "ic-mobile" nominal= {8455000}>
                                Game
                                <br/>
                                Mobile
                            </Category>
                            <Category icon = "ic-dekstop" nominal= {5000000}>
                                Other
                                <br/>
                                Categories
                            </Category>
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Game</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow icon="overview-1" game="Mobile Legends" device="Dekstop" item= {200} nominal={290000} status= "Pending"/>
                                <TableRow icon="overview-2" game="Call of Duty:Modern" device="Dekstop" item= {550} nominal={740000} status= "Success"/>
                                <TableRow icon="overview-3" game="Clash of Clans" device="Mobile" item= {100} nominal={120000} status= "Failed"/>
                                <TableRow icon="overview-4" game="The Royal Game" device="Mobile" item= {225} nominal={200000} status= "Pending"/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
