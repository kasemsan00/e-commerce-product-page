import Price from "./Price";

export default function ProductDetail() {
    return (
        <div className="product-detail">
            <label>SNEAKER COMPANY</label>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>
                These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <Price />
        </div>
    );
}
