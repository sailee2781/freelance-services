import React from "react"
import {useParams,Link} from "react-router-dom"
import progdomain from './progdomain'
import {Card} from "react-bootstrap"
import './Prog_details.css'
import Unorderedlist from "./Unorderedlist";
import Footer from "./Footer"
function ProductDetail() {
    const {name} = useParams()
    const thisProduct = progdomain.find(prog => prog.domain_name == name)
    let img = thisProduct.image
    return (
        <div>
            <Unorderedlist/>
            <Card className="progdetail-card">
                    <Card.Text className="progdetail-head">Get Details of {thisProduct.domain_name} </Card.Text>
                    <Card.Img className="progdetail-img" variant="top" src={img} />
                    <Card.Body>
                      <Card.Text >
                        <p className="progdetail-intro">{thisProduct.domain_name}</p>
                        <p>Description : {thisProduct.description}</p>
                        <p className="progdetail-name">Name : {thisProduct.freelancer_name}</p>
                        <h6 className="progdetail-name">Price : {thisProduct.cost}</h6>
                        <h4 className="progdetail-contact">Contact Me</h4>
                        <p className="progdetail-contact-main">Mail : {thisProduct.mail}</p>
                        <p className="progdetail-contact-main">Phone : {thisProduct.phone}</p>
                        <Card.Text className="progdetail-button">
                            <button className="btn btn-dark">
                                <Link className="prog-read" to={`/prog`}>Go Back</Link>
                            </button>
                        </Card.Text>
                      </Card.Text>
                    </Card.Body>
            </Card>
            <Footer/>
        </div>
    )
}

export default ProductDetail