import React from "react"
import "./stats.sass"
export const Stats = () => {
    return(
        <div className="cmp_stats">
            <ul>
                <li><span>HP</span> <i>134 / 165</i></li>
                <li><span>MP</span> <i>48 / 48</i></li>
            </ul>
        </div>
    )
}