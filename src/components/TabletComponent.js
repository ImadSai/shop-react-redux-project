import React from 'react';
import tablet from '../images/tablet.png';
import { connect } from 'react-redux';
import { buyTablet } from "../redux/tablet/actionTablet";

function TabletComponent(props) {

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>

            <img className="card-img-top mx-auto d-block img-fluid" style={{ maxWidth: "100%", height: "auto", width: "240px" }} src={tablet} alt="phone" />

            <div className="card-body">
                <p>
                    Disponibilité :
                    <span id="count">{props.tablet}</span>
                </p>
            </div>
            <button className="btn btn-primary" onClick={() => props.buyTablet()}>Acheter</button>
        </div>
    )
}

// Importer le state et le passer en Props
const mapStateToProps = (state) => {
    return {
        tablet: state.tabletReducer.tablet
    }
}

// Map Dispatch Method to props
const mapDispatchToProps = () => {
    return {
        buyTablet
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(TabletComponent);