import React from 'react';
import tablet from '../images/tablet.png';
import { useSelector, useDispatch } from 'react-redux';
import { buyTablet } from "../redux/tablet/actionTablet";

function TabletComponent() {

    const tabletCount = useSelector((state) => state.tabletReducer.tablet);
    const dispatch = useDispatch();

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>

            <div className="card-img-top mx-auto d-block img-fluid" style={{ width: "250px", height: "250px" }} >
                <img className="mx-auto d-block" style={{ maxWidth: "100%", maxHeight: "100%" }} src={tablet} alt="phone" />
            </div>

            <div className="card-body">
                Disponibilité :
                <span id="count" style={{ fontWeight: 'bold' }}>{tabletCount}</span>
            </div>

            <button className="btn btn-primary" onClick={() => dispatch(buyTablet())}>Acheter</button>
        </div >
    )
}

export default TabletComponent;