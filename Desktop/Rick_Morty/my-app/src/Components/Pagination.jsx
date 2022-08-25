import React from "react";
import "./Pagination.css"

function Pagination({prev, next, onPrevious, onNext}) {

    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav>
            <ul className="pagination">
                { prev ? (<li className="page-link">
                                <button className="previos bnt" onClick={handlePrevious}>
                                Previous
                                </button>
                         </li>) :  null
                }
                {  next ? ( <li className="page-link">
                                <button className="next bnt" onClick={handleNext}>
                                    Next
                                </button>
                            </li>) :  null
                }
            </ul>
        </nav>
    )
};

export default Pagination;