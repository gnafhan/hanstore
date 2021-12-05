import Line from "./Line"
import ReachedItem from "./ReachedItem"

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
        <div className="container-fluid">
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                <ReachedItem item="Players Top up" size="290M+"/>
                <Line/>
                <ReachedItem item="Game Available" size="12.500"/>
                <Line/>
                <ReachedItem item="Players Top up" size="99,9%"/>
                <Line/>
                <ReachedItem item="Players Top up" size="4.7"/>
            </div>
        </div>
    </section>
    )
}
