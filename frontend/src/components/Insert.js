import React from "react";
import './Insert.css';
import Header from "./Header";
import { Form, Input, Button, message } from 'antd';
import { config } from "./../App";
import { withRouter } from 'react-router-dom';

const { TextArea } = Input;
  
const Insert = (props) => {
    const onFinish = async (values) => {
      const {ImgName,ImgURL,ImgDetails} =values;
      const rawResponse = await fetch(`${config.endpoint}/images/new`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ImgName,
          ImgURL,
          ImgDetails
        })
      });
      const content = await rawResponse.json();
      if(content.status == 'success'){
        message.success("Successfully added new image to gallery")
        setTimeout(function(){
          props.history.push('/')
        },1500)
      } else {
        message.success("Error in inserting new image, please try again!")
      }
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <>
        <Header />
        <div className='form-container'>
          <h2 className='form-header'>Add new Image</h2>
            <Form
              name="basic"
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 18,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >

              <Form.Item
                label="Image name"
                name="ImgName"
                rules={[
                  {
                    required: true,
                    message: 'Please input image name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Image URL"
                name="ImgURL"
                rules={[
                  {
                    required: true,
                    message: 'Please input image url!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Image Detail"
                name="ImgDetails"
                rules={[
                  {
                    required: true,
                    message: 'Please input image detail!',
                  },
                ]}
              >
                <TextArea row={4} />
              </Form.Item>
        
              <Form.Item
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
        </div>
      </>
    );
  };

  export default withRouter(Insert);