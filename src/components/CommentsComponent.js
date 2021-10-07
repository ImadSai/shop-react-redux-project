import React, { useEffect } from "react";
import { apiCall } from "../redux/comments/actionComments";
import { connect } from 'react-redux';
import loading from '../images/loading.gif'

const CommentsComponent = ({ apiData, apiComments }) => {

    // Load Data
    useEffect(() => {
        apiComments();
    }, [apiComments]);

    console.log(apiData);

    return (
        <div>

            {apiData.isLoading && <img className="mx-auto d-block" style={{ maxWidth: "35px", maxHeight: "35px" }} src={loading} alt="loading" />}

        </div >
    );
};

// Importer le state et le passer en Props
const mapStateToProps = (state) => {
    return {
        apiData: state.commentsReducer
    }
}

// Map Dispatch Method to props
const mapDispatchToProps = dispatch => {
    return {
        apiComments: () => dispatch(apiCall())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);