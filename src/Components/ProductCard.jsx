import { Link } from "react-router-dom";

function ProductCard({ info }) {
    return (
        <Link to="/details" state={{ info: info }}>
            <article>
                <h3>{info.title}</h3>
            </article>
        </Link>
    );
}

export default ProductCard;