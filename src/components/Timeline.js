import React from 'react';

const Timeline = ({ timelineData, position }) => {
    const pos = position==='left'?'js--fadeInLeft':'js--fadeInRight';
    return (   
                <div className="timeline-item">
                    <div className="timeline-img"></div>
                    <div className={'timeline-content ' +pos}>
                        <div className="date">{timelineData.startwork} - {timelineData.endwork}</div>
                        <h3>{timelineData.company}</h3>
                        <blockquote>{timelineData.label}</blockquote>
                        <a className="bnt-more" href="javascript:void(0)">More</a>
                    </div>
                </div>
           );
}
export default Timeline;