import React from 'react'


export default function Works(props) {
    const { data, loading, loadEnd } = props
    return (
        <div className="works"><h3>学员作品</h3>
            <ul className="works_list clearfix">
                {data.map(item => (
                    <li key={item.id}>
                        <a href="/work/1">
                            <img src={item.icon} alt='' className="work_a" />
                            <span className="wrork_txt clearfix work_a">
                                <strong className="work_a">{item.title}</strong>
                                <span className="work_a">
                                    <em className="work_a">{item.message}</em>
                                    <em className="work_a">{item.good}</em>
                                </span>
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <a className="more">{loadEnd ? '没有新数据了' : (loading ? '正在加载中' : '上滑加载更多')}</a>
        </div>
    )
}