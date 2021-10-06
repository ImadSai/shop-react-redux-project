import React from 'react';
import phone from '../images/phone.png';
import { buyPhone } from '../redux/phone/actionPhone';
import { connect } from 'react-redux';

function PhoneComponent(props) {

    return (
        <div className="card" style={{ width: "300px", margin: "5px", padding: "10px" }}>
            <img className="card-img-top mx-auto d-block img-fluid" style={{ maxWidth: "100%", height: "auto", width: "240px" }} src={phone} alt="phone" />
            <div className="card-body">
                <p>
                    Disponibilité :
                    <span id="count">{props.phones}</span>
                </p>
            </div>
            <button className="btn btn-primary" onClick={() => props.buyPhone()}>Acheter</button>
        </div>
    )
}

// Importer le state et le passer en Props
const mapStateToProps = (state) => {
    return {
        phones: state.phoneReducer.phones
    }
}

// Map Dispatch Method to props
const mapDispatchToProps = () => {
    return {
        buyPhone
    }
};

export default connect(mapStateToProps, mapDispatchToProps())(PhoneComponent);