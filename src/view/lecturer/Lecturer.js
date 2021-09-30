import React, { useEffect, useState } from "react"
import Frame from "../../components/Frame"
import '../../assets/css/teacher.css'
import { useSelector } from "react-redux"
import useGetLectures from "../../redux/store/actions/getLectures"
import LecturerBanner from "./LecturerBanner"
import Join from "./Join"
import Footer from "../../components/Footer"
import LecturerInfo from "./LecturerInfo"
export default function Lecturer(props) {
    const { data } = useSelector(state => state.lectures)
    const [showProup, setShowProup] = useState(false)
    const [proupInfo, setProupInfo] = useState(null)
    let newData = [];
    for (let i = 0; i < data.length; i += 3) {
        let newArr = [];
        let end = i + 3
        // data[i] && newArr.push(data[i])
        // data[i + 1] && newArr.push(data[i + 1])
        // data[i + 2] && newArr.push(data[i + 2])
        end = end > data.length ? data.length : end
        for (let j = i; j < end; j++) {
            newArr.push(data[j])
        }
        newData.push(newArr)
    }
    function showProupInfo(data) {
        setProupInfo(data)
        setShowProup(true)
    }
    function hideProupInfo() {
        setShowProup(false)
    }
    const getLecturers = useGetLectures()
    useEffect(() => {
        getLecturers()
    }, [])
    return (
        <div>
            <Frame bounce={false}>
                <LecturerBanner newData={newData} data={data} showProupInfo={showProupInfo} />
                <Join />
                <Footer />
            </Frame>
            {showProup ? <LecturerInfo proupInfo={proupInfo} hideProupInfo={hideProupInfo} /> : ''}
        </div>
    )
}