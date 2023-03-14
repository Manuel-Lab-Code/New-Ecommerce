import { React, useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Button, Card, Bold } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export const Products = () => {
    const [data, setData] = useState([]);
    const [fliter, setFliter] = useState(data);
    const [loading, setLoading] = useState([false]);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFliter(await response.json());
                setLoading(false);
                console.log(fliter)
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
             <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
                <div> <span className="spinner-border-sm"  variant="primary"></span>Loading...</div>
                <div className="col-md-3 py-5 ">
                    {/* style={"spinner-width: 1rem" } */}
                    <Skeleton height={350} count={5} />
                </div>
                <div className="col-md-3 py-5">
                    <Skeleton height={350} count={5} />
                </div>
                <div className="col-md-3 py-5">
                    <Skeleton height={350} count={5} />
                </div>
                <div className="col-md-3 py-5">
                    <Skeleton height={350} count={5} />
                </div>

            </>
        )
    };

    const fliterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFliter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons py-4">
                    <Button className="btn btn-outline-dark me-2 "
                        onClick={() => setFliter(data)} >All</Button>
                    <Button className="btn btn-outline-dark me-2"
                        onClick={() => fliterProduct("men's Wear")}>Men's Wear</Button>
                    <Button className="btn btn-outline-dark me-2"
                        onClick={() => fliterProduct("women's Wear")}>Women's Wear</Button>
                    <Button className="btn btn-outline-danger me-2"
                        onClick={() => fliterProduct("jewelery")}>Jewelery </Button>
                    <Button className="btn btn-outline-dark me-2"
                        onClick={() => fliterProduct("electronics")}>Electronics</Button>
                </div>
                {fliter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4"   >
                                <Card className="h-100 text-center py-4" key={product.id}style={{ width: '16rem' }} >
                                    <Card.Img variant="top" src={product.image}
                                        height="250px" />
                                    <Card.Body>
                                        <Card.Title className="mb-0" >
                                            {product.title}
                                        </Card.Title>
                                        <Card.Text className="card-text lead fw-old" >
                                            ${product.price}
                                        </Card.Text>
                                        <NavLink to={`/products/${product.id}`} className="btn  btn-outline-dark">
                                            Buy Now
                                        </NavLink >
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 md-5">
                    <h1 className="display-6 fw-bolder text-center">
                        Latest Products
                        <hr /></h1>
                </div>
                <div className="row justify-content-center text-center">
                    {loading ? <Loading /> : < ShowProducts  />}
                </div>
            </div>

        </div>
    );
}
