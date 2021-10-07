import React, { useState } from 'react';
import tv from '../images/tv.png';
import { connect } from 'react-redux';
import { buyTv } from "../redux/tv/actionTv";

function TvComponent(props) {

    const [desiredTvs, setDesiredTvs] = useState(1);

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>

            <div className="card-img-top mx-auto d-block img-fluid" style={{ width: "250px", height: "250px" }} >
                <img className="mx-auto d-block" style={{ maxWidth: "100%", maxHeight: "100%" }} src={tv} alt="tv" />
            </div>

            <div className="card-body">
                Disponibilité :
                <span id="count" style={{ fontWeight: 'bold' }}>{props.tv}</span>
            </div>

            <div className="input-group">
                <input type="number" className="form-control" placeholder={desiredTvs} aria-label="Number of Tvs" onChange={e => setDesiredTvs(e.target.value)} aria-describedby="button-buy-tv" />
                <button type="button" className="btn btn-primary" aria-describedby="button-buy-tv" onClick={() => props.buyTv(desiredTvs)}>Acheter</button>
            </div>
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