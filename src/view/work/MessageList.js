import React from 'react'
import { useSelector } from 'react-redux'
import ToData from '../../components/ToData';



export default function MessageList() {
    const { messageData, loading, loadEnd } = useSelector(state => state.messageList)
    return (
        <div className='comment_list_wrap'>
            {messageData.length < 0 ?
                <p className="comment_list_info">快来发布一条评论吧</p> :
                <>
                    <ul className="comment_list">
                        {messageData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="user_comment clearfix">

                                        <span>{item.username}</span>
                                    </div>
                                    <div className="comment_txt">
                                        {item.content}
                                    </div>
                                    <div className="comment_footer">
                                        <time>
                                            <ToData time={item.create_time} />
                                        </time>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <p className="comment_list_more">{loadEnd ? '没有新数据了' : (loading ? '正在加载中' : '上滑加载更多')}</p>
                </>
            }

        </div>
    )
}