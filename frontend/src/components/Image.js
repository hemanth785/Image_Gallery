import './Image.css';
import {Col} from 'antd';
import { withRouter } from 'react-router-dom';

const Image = (props) => {
    const {_id, ImgName, ImgURL, ImgDetails} = props.image;

    const handleClick = async () => {
        props.history.push(`/show?id=${_id}`)
    }

    return (
        <Col className='imageCard' xs={24} sm={12} md={8} lg={6} onClick={handleClick}>
            <img src={ImgURL}/>
        </Col>
    )
}
export default withRouter(Image);