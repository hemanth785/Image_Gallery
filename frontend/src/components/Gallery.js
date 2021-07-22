import React, { useImperativeHandle } from "react";
import Image from "./Image";
import Header from "./Header";
import './Gallery.css';
import {Row} from 'antd';
import { withRouter } from 'react-router-dom';
import { config } from "../App";
  
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      imagesList: []
    };
  }
  
  async componentDidMount() {
    let response = await fetch(`${config.endpoint}/images`);
    response = await response.json();
    this.setState({
      imagesList: response.images
    });
    localStorage.setItem('imagesList', JSON.stringify(response.images))
  }
  
  render() {
    return <div>
            <Header />

            <Row className='gallery-container'>
              {this.state.imagesList.map(image => (
                  <Image key={image._id} image={image}/>
              ))}
              
            </Row>
          </div>
  }
}
  
export default withRouter(Gallery);