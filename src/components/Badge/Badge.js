import React, { useEffect, useState } from 'react';
import '../../assets/sass/components/Badge/_badge.scss';

const Badge = ({badgeType}) => {
    const [badgeStyle, setBadgeStyle] = useState("");

    useEffect(() => {
        switch (badgeType) {
            case "PINNED": setBadgeStyle("pinBadge fas fa-thumbtack fa-3x");
                break;
            case "HIGH": setBadgeStyle("highBadge fas fa-bookmark fa-2x");
                break;
            case "MID": setBadgeStyle("midBadge fas fa-bookmark fa-2x");
                break;
            case "LOW": setBadgeStyle("lowBadge fas fa-bookmark fa-2x");
                break;
            case "DONE": setBadgeStyle("doneBadge fas fa-bookmark fa-2x");
                break; 
            default:
                break;
        }
    },[badgeType]);

    return <i className={badgeStyle}></i>
}

export default Badge;