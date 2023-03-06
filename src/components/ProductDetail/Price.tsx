export default function Price() {
    return (
        <div>
            <div className={"discount"}>
                <label className={"price-discount"}>$125.00</label>
                <label className={"price-discount-percent"}>50%</label>
            </div>
            <div className={"price"}>
                <label>$250.00</label>
            </div>
        </div>
    );
}
