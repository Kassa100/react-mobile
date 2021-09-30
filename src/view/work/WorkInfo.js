import React from 'react'
import Carousels from "../../components/Carousels";
import Article from './Article';
import Good from './Good';
import MessageList from './MessageList';
export default function WorkInfo(props) {
    const { data } = props
    return (
        <div className='work_details'>
            <Carousels
                data={data.image_path.map(item => item.path)}
                render={
                    src => <img src={src} alt='' />
                }
            />
            <div className="miiaov_box">
                <Article data={data} />
                <article className="miiaov_comment">
                    <Good num={data.good} id={data.id} />
                    <MessageList />
                </article>
            </div>
        </div>
    )
}