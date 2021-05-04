import React from 'react';
import './Education.css';

// style={{ border: "1px solid green"}}
const Education = () => {
    return (
        <section className="pt-5">
            <h2 style={{ color: "#2596be" }} className="pb-3">Education</h2>
            <div className="col-md-6">
                <div className="pb-3">
                    <h4>B.Sc. in Computer Science and Engineering <span style={{ fontSize: "20px" }}>(2016-2020)</span></h4>
                    <h5>United International University</h5>
                    <h6>Graduated with CGPA 3.80</h6>
                </div>
            </div>
        </section>
    );
};

export default Education;