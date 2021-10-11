import { Link } from "react-router-dom"

const Products = () => {

    return (<div>
        <h2>Product Main page</h2>
        <ul>
            <li> <Link to='/product/1'>Product 1</Link></li>
            <li><Link to='/product/2'>Product 2</Link></li>
            <li><Link to='/product/3'>Product 3</Link></li>
        </ul>
    </div>)
}

export default Products