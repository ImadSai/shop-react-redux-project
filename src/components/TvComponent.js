import React from 'react';
import tv from '../images/tv.png';
import { connect } from 'react-redux';
import { buyTv } from "../redux/tv/actionTv";

function TvComponent(props) {

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>

            <img className="card-img-top mx-auto d-block img-fluid" style={{ maxWidth: "100%", height: "auto", width: "240px" }} src={tv} alt="tv" />
            <div className="card-body">

                <p>
                    Disponibilité :
                    <span id="count">{props.tv}</span>
                </p>
            </div>
            <button className="btn btn-primary" onClick={() => props.buyTv()}>Acheter</button>
        </div>
    )
}

// Importer le state et le passer en Props
const mapStateToProps = (state) => {
    return {
        tv: state.tvReducer.tv
    }
};

// Map Dispatch Method to props
const mapDispatchToProps = () => {
    return {
        buyTv
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(TvComponent);