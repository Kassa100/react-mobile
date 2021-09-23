import React from 'react'
import { Carousel } from "antd-mobile"

export default function Carousels(props) {
    const { data, render } = props
    console.log(render);
    return (
        <Carousel
            autoplay={true}
            infinite
            dotStyle={{
                width: '0.4rem',
                height: "0.1333333rem",
                background: '#fff',
                opacity: '0.4',
                borderRadius: 0,
                marginBottom: '0.2rem'
            }}
            dotActiveStyle={{
                width: '0.4rem',
                height: "0.1333333rem",
                background: '#fff',
                opacity: '1',
                borderRadius: 0,
                marginBottom: '0.2rem'
            }}
        >
            {data.map((item, index) => (
                <div key={index}>{render(item)}</div>
            ))}
        </Carousel>
    )
}