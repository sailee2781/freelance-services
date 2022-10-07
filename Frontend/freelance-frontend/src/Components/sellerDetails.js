import React, {useState, useEffect} from 'react'
import { API } from "../globals"
import axios from 'axios'

export const SellerDetails = ({ match }) => {
    console.log(match.params.id);
    const [item, setitem] = useState({})
    function onLoad () { 
        axios.get(`${API} + "programming"`).where("Number", "==", match.match.params.id)
            .then((response) => {
                response.forEach((doc) => {
                console.log(response.data)
                setitem(doc.data());
            })
        })
    }
    console.log(item);
    useEffect(() => {
        onLoad();
    }, []);
    return (
        <>
        {/* <div className="cusdes-container"> */}
            <div className="cusdes">
                <h1>HI</h1>
                <div>
                    <img src={item.Image} alt="" />
                </div>
                <div>
                    <h2>{item.Name}</h2>
                    About: <br/>
                    {item.Description} <br/> <br/>
                    Price:  {item.price} <br/> 
                    Name:   {item.name}
                </div>
                <div>
                    Contact : {item.contact} <br/>   Email : {item.email}
                </div>
                
            </div>
        {/* </div> */}
        </>
    )
}
