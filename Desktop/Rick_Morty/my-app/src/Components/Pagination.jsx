import React from "react";

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
                                <button className="previos" onClick={handlePrevious}>
                                Previous
                                </button>
                         </li>) :  null
                }
                {  next ? ( <li className="page-link">
                                <button className="next" onClick={handleNext}>
                                    Next
                                </button>
                            </li>) :  null
                }
            </ul>
        </nav>
    )
};

export default Pagination;