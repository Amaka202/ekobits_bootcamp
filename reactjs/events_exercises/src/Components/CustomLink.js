import React from 'react'

export default function CustomLink(props) {
    const {href, text, style} = props
    return (
        <div className="customlinks">
            <a href={href} target="_blank" style={style}>{text}</a>
        </div>
    )
}
