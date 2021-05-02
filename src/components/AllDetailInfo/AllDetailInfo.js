import React from 'react';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllDetailInfo = (props) => {
    const d = props.data;
    return (
        <div className="d-flex mb-5">
            <div className="col-md-5 projectInfo">
                <   img src={d.picture} alt="" />
            </div>

            <div className="col-md-6 detailInfoArea">
                <div style={{ backgroundColor: "#595775", color: "white" }}>
                    <h4 className="ps-4 pt-4">{d.name}</h4>
                    <h6 className="ps-4 pb-3">{d.type}</h6>
                    <div>
                        <ul className="ps-5">
                            {
                                d.description.map(description => <li>{description}</li>)
                            }
                        </ul>
                    </div>
                    <div className="ps-5 row d-flex pt-4">
                        {
                            d.stack.map(description =>
                                <p className="ps-3" style={{ borderRadius: "10px", width: "100px", backgroundColor: "#583E2E", padding: "10px", marginRight: "10px", fontSize: "14px" }} >
                                    {description}</p>)
                        }
                        <div className="project-icon pt-3 pb-2">
                            <a target="_blank" href={d.liveLink}> <FontAwesomeIcon className="icon active-icon" icon={faExternalLinkAlt} /></a>
                            <a target="_blank" href={d.liveLink}> <FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDetailInfo;