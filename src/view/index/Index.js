import React from "react"
import Carousels from "../../components/Carousels"
import "../../assets/css/index.css"
let imgDate = [
    require('../../assets/images/banner/img1.png').default,
    require('../../assets/images/banner/img2.png').default,
    require('../../assets/images/banner/img3.png').default,
    require('../../assets/images/banner/img4.png').default,
]
export default function Index(props) {
    return (
        <div>
            <Carousels
                data={imgDate}
                render={(data) => {
                    return <img style={{ width: '100%' }} src={data} alt='' />
                }}
            />
        </div>
    )
}
