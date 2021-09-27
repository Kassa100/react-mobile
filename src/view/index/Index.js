import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import Carousels from "../../components/Carousels"
import "../../assets/css/index.css"
import Course from "./Course"
import RegisterVip from "./RegisterVip"
import MiaovFeature from "./MiaovFeature"
import Works from "./Works"
import Frame from "../../components/Frame"
import useGetWorks from "../../redux/store/actions/getWorks"
let imgData = [
    require('../../assets/images/banner/img1.png').default,
    require('../../assets/images/banner/img2.png').default,
    require('../../assets/images/banner/img3.png').default,
    require('../../assets/images/banner/img4.png').default,
]
export default function Index(props) {
    const { data, loading, loadEnd } = useSelector(state => state.works);
    const getWorksData = useGetWorks()
    let [page, setPage] = useState(1)
    function getData() {
        let promise = getWorksData(page)
        setPage(page++)
        return promise
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Frame pullUp={true} getData={getData} >
            <div>
                <Carousels
                    data={imgData}
                    render={(data) => {
                        return <img src={data} alt='' />
                    }}
                />
                <section className='index_content'>
                    <Course />
                    <RegisterVip />
                    <MiaovFeature />
                    <Works data={data} loading={loading} loadEnd={loadEnd} />
                </section>
            </div>
        </Frame>
    )
}
