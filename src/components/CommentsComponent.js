import React, { useEffect, useState } from "react";
import { apiCall } from "../redux/comments/actionComments";
import { connect } from 'react-redux';
import loading from '../images/loading.gif'

const CommentsComponent = ({ apiData, apiComments }) => {

    const [commentsStartIndex, setCommentsStartIndex] = useState(0);

    // Load Data
    useEffect(() => {
        apiComments(commentsStartIndex);
    }, [apiComments, commentsStartIndex]);

    useEffect(() => {
        window.addEventListener('scroll', loadMoreComments);

        return () => {
            window.removeEventListener('scroll', loadMoreComments);
        };
    }, [apiData]);

    const loadMoreComments = () => {
        console.log(apiData);
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight && !apiData.isLoading) {
            setCommentsStartIndex(commentsStartIndex + 10);
        }
    };

    const displayData = (apiData.isLoading && apiData.comments.length === 0) ? (
        <img className="mx-auto d-block" style={{ maxWidth: "40px", maxHeight: "40px" }} src={loading} alt="loading" />
    ) : (
        apiData.comments.map(comment => {
            return (
                <div key={comment.email} className="card p-3 mt-2">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="user d-flex flex-row align-items-center">
                            <img src="https://picsum.photos/200" width="40" className="user-img rounded-circle m-2" alt="profilepicture" />
                            <span>
                                <small className="fw-bold text-primary m-1">{comment.email}</small>
                                <small className="fst-italic m-1">{comment.name}</small>
                                <p className="font-weight-bold m-2">{comment.body} </p>
                            </span>
                        </div>
                        <small>3 days ago</small>
                    </div>
                </div>
            );
        })
    );

    return (
        <div className="m-3">
            {displayData}
            {(apiData.isLoading && apiData.comments.length > 0) && <img className="mx-auto d-block m-1" style={{ maxWidth: "40px", maxHeight: "40px" }} src={loading} alt="loading" />}
        </div>
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
        apiComments: (start) => dispatch(apiCall(start))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);