interface Props {
  price: number;
  discount: number;
  discountPercent: string;
}

export default function Price({ price, discount, discountPercent }: Props) {
  return (
    <div className={"price-section"}>
      <div className={"discount"}>
        <label className={"price-discount"}>${discount}</label>
        <label className={"price-discount-percent"}>{discountPercent}</label>
      </div>
      <div className={"price"}>
        <label>${price}</label>
      </div>
    </div>
  );
}
