import './ImageDetail.css';
import { withRouter } from 'react-router-dom';
import Header from "./Header";


const ImageDetail = (props) => {
    let imagesList = JSON.parse(localStorage.getItem('imagesList'))
    

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    let image = imagesList.find(image => {
        return image._id === id;
    })
    const { ImgName, ImgURL, ImgDetails} = image;

    // let ImgName= "Car cockpit";
    // let ImgURL= "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    // let ImgDetails= "A Beautiful look from car cockpit";
    return (
        <>
            <Header />
            <div className='imageDetailContainer'>
                <img src={ImgURL} />
                <div className='imageContent'>
                    <h2>{ImgName}</h2>
                    
                    <hr />
                    <h3>Details</h3>
                    <div>{ImgDetails}</div>
                </div>
                
            </div>
        </>
    )
}

export default withRouter(ImageDetail)