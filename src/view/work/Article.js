import React from 'react'

export default function Article(props) {
    const { data } = props
    return (
        <article className='miiaov_article'>
            <h3>
                {data.title}
            </h3>
            <div className="miiaov_txt" dangerouslySetInnerHTML={{
                __html: data.content
            }}></div>
        </article>
    )
}