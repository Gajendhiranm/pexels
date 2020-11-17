import React from 'react'

 const  Search = (props)=> {
 
    return (
        <div>
           <div id="custom-search-input" className="d-flex justify-content-center">
                            <div className="input-group col-md-6">
                                <input type="text" className="search-query form-control" placeholder="Search" type="" onChange={props.search}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-danger" type="button">
                                        SUBMIT
                                    </button>
                                </span>
                            </div>
                        </div>
	</div>
    )
}

export default Search;
