import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import Frame from '../../components/Frame'
import '../../assets/css/miiaov.css'
import { useSelector } from "react-redux";
import useGetWork from "../../redux/store/actions/getWork";
import { useDispatch } from "react-redux";
import Skeleton from "../../components/Skeleton";
import WorkInfo from "./WorkInfo";
import useGetMessageList from "../../redux/store/actions/getMessageList";
import Message from "./Message";
export default function Work(props) {
    const { id } = useParams();
    const { data, loading } = useSelector(state => state.work)
    const user = useSelector(state => state.getUser);
    const { history } = props
    const dispatch = useDispatch();
    const getWork = useGetWork()
    const getMessageList = useGetMessageList()
    let [messagePage, setMessage] = useState(1);
    let [showMessage, setShowMessage] = useState(false)
    function getMessageData() {
        let promis = getMessageList(messagePage, id)
        setMessage(++messagePage)
        return promis
    }
    useEffect(() => {
        getWork(id)
        getMessageData()
        return () => {
            dispatch({
                type: 'WORK_RESET'
            })
            dispatch({
                type: 'RESET_MESSAGE'
            })
        }
    }, [])
    return (
        <div>
            <Frame bounce={true} pullUp={true} getData={getMessageData}>
                {loading ? <Skeleton /> : <WorkInfo data={data} />}
            </Frame>
            <footer className="miiapv_footer" onTouchEnd={() => {
                if (user) {
                    setShowMessage(true)
                } else {
                    history.push('/login')
                }
            }}>
                回复本贴
            </footer>
            <Message show={showMessage} id={id} setShowMessage={setShowMessage} />
        </div>
    )
}