import './Header.css';
import {Button} from 'antd';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <h1 className='header-text' onClick={()=> props.history.push('/')}>Gallery</h1>
            <Button className='upload' onClick={()=> props.history.push('/new')} type="primary" shape="round" size='large'>
            Upload new image
            </Button>
        </header>
    )
}

export default withRouter(Header);