import React from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card";

class Home extends React.Component {
constructor(props) {
    super(props)


}
 
  render() {
    
    return(
      <div>
              <h2 className="m-3">Most popular </h2>
              <div className="grid-container ">
    {
this.props.data.map((e,index) =>{
    return (
        <Link to={`/home/${e.id}`} key={e.id}  onClick={this.props.setId}>
                <Card e={e} />
        </Link>
    );
   })
    }
</div>

      <h6 className="text-center mt-5 mb-5">Copyrights to<a href="https://gajendhiranm.github.io" target="_blank">@Gajendhiran</a> </h6>
      </div>

    );
  }
}
export default Home;