import React from 'react';

function Command({c,i}) {
    function next() {
        window.location.href = "/#"+(i+1)
    }
    function prev() {
        window.location.href = "/#"+(i-1)
    }
    return (
        <div className="command" id={i}>
            <div className="description">
                step #{i} {c.desc}
            </div>
            <h2 className="code">
                {c.command}
            </h2>
            <button className="before" onClick={prev}>&lt;</button>
            <button className="after" onClick={next}>&gt;</button>
        </div>
    );
}

export default Command;
