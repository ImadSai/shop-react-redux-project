import React, { useEffect, useRef, useState } from "react";
import { apiCall } from "../redux/comments/actionComments";
import { connect } from 'react-redux';
import loading from '../images/loading.gif'

const CommentsComponent = ({ apiData, apiComments }) => {

    const [commentsStartIndex, setCommentsStartIndex] = useState(0);
    const commentsLimits = useRef(null);
    const renders = useRef(0);

    // Load Data
    useEffect(() => {
        apiComments(commentsStartIndex);
    }, [commentsStartIndex]);

    // Load more Comments when scrolling
    useEffect(() => {
        const loadMoreComments = () => {
            var position = commentsLimits.current.getBoundingClientRect();

            // checking if Ref object is fully visible
            if (position.top >= 0 && (position.bottom - (window.innerHeight * 0.2) <= window.innerHeight) && !apiData.isLoading) {
                setCommentsStartIndex(commentsStartIndex + 10);
            }
        };

        // Add Event listener
        window.addEventListener('scroll', (loadMoreComments));

        // Clean when Unmount
        return () => {
            window.removeEventListener('scroll', loadMoreComments);
        };
    }, [apiData.comments]);

    // Comments List
    const commentsList = apiData.comments.map(comment =>
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

    // Comments View 
    const commentsView = (
        <React.Fragment>
            {commentsList}
            <hr ref={commentsLimits} />
        </React.Fragment>
    );

    return (
        <div className="m-3">
            <div>renders : {renders.current++}</div>
            {apiData.comments.length > 0 && commentsView}
            {apiData.isLoading && <img className="mx-auto d-block m-1" style={{ maxWidth: "40px", maxHeight: "40px" }} src={loading} alt="loading" />}
        </div>
    );
};

// Importer le state et le passer en Props
const mapStateToProps = (state) => ({
    apiData: state.commentsReducer
});

// Map Dispatch Method to props
const mapDispatchToProps = dispatch => {
    return {
        apiComments: (start) => dispatch(apiCall(start))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsComponent);