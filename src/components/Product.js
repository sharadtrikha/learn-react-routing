import { useParams, useHistory } from 'react-router-dom';

const Product = () => {

    const params = useParams(); // return object  -> {id : '3'}
    const history = useHistory();

    const onBtnHandler = () => {
        console.log(history);
        history.push('/about-us');
    }

    return (
        <div>
            <h3>Product component loaded {params.id}</h3>
            <button onClick={onBtnHandler}>Click me to redirect to About us Page</button>
        </div>
    )
}

export default Product