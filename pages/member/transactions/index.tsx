import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "./transactionContent";

export default function Transactions() {
    return (
        <section className="transactions overflow-auto">
            <Sidebar activeMenu="transactions"/>
            <TransactionContent/>
    </section>

    )
}
