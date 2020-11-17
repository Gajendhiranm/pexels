import React from "react";
import Search from "./Search";

const Banner = (props) => {
    return(
        <div className="banner col-md-12">
            <div className="search">
                <h3 className="font-weight-bolder text-white p-2">The best free stock photos & videos shared by talented creators.</h3>
                <Search search={props.search}/>
                <p className="ml-3 mt-2 text-center"><span className="font-weight-bolder ">Suggested </span>: black,color,flame,neon,more</p>
            </div>
        </div>
    );
}

export default Banner;