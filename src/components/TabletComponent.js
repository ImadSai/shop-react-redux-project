import React from 'react';
import tablet from '../images/tablet.png';
import { useSelector, useDispatch } from 'react-redux';
import { buyTablet } from "../redux/tablet/actionTablet";

function TabletComponent() {

    const tabletCount = useSelector((state) => state.tabletReducer.tablet);
    const dispatch = useDispatch();

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>

            <img className="card-img-top mx-auto d-block img-fluid" style={{ maxWidth: "100%", height: "auto", width: "240px" }} src={tablet} alt="phone" />

            <div className="card-body">
                <p>
                    Disponibilité :
                    <span id="count">{tabletCount}</span>
                </p>
            </div>
            <button className="btn btn-primary" onClick={() => dispatch(buyTablet())}>Acheter</button>
        </div >
    )
}

export default TabletComponent;