import React from 'react'

 function Id(props) {
    console.log(props.data )

    return (
        <div>
               <div class="id-image d-flex flex-column">
                    <h4 className="text-center text-dark">{props.data.photographer}</h4>
                    <img src={props.data.src.portrait} height="400" width="290" />
                    <button href={`${props.data.photographer_url}`} target="_blank" className="text-center mt-2 btn btn-info">Photographer</button>
                 </div>            
        </div>
    )
}
export default Id;