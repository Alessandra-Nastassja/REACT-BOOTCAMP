import React, { useState, useEffect } from "react";
import { Form, Input, Card } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const Index = () => {
    const [api2, setApi] = useState([])
    const [query, setQuery] = useState('');
    let key = "o9d4M1YCvo0pCZc19YLfmrQpiK1Wave8";

    useEffect(() => {
        const limit = 1;
        const _pageNum = 0
        const offset = _pageNum * limit;

        const queryParams = [
            'offset=' + offset,
            'limit=' + limit
        ];
        
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&${queryParams.join('&')}`)
            .then(res => res.json())
            .then(data => {
                setApi(data)
            })
            .catch(err => console.error(err));
    }, [query])

    return (
        <>
            <Form  {...layout}>
                <Form.Item
                    label="Gif"
                    name="gif"
                    rules={[{ required: true, message: 'Please input your gif!' }]}>
                    <Input placeholder="Gif" onChange={value => setQuery(value)} />
                </Form.Item>
            </Form>
            <div>
                { query ? api2.data.map(({ images, title }) => {
                    return console.log(images.downsized_large.url);
                }): ''}
            </div>
        </>
    )
}

export default Index;