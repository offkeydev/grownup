import React, {useState} from "react"
import "./effect.sass"
import time from "../../../img/icons/clock.svg"
import type from "../../../img/icons/type.svg"

export const Effect = () => {
    const [toggle, setToggle] = useState(false)
    const toggleHover = () => setToggle(!toggle)
    const effects = [
        {name: "Усталость",
            description: "Снижает получаемый опыт на 6%",
            paramCount: 6,
            loss: true,
            time: 120000, // 120 SEC
            param: "EXP"},
        {name: "Яд",
            description: "Снижает получаемый опыт на 11%",
            loss: true,
            paramCount: 11,
            time: 120000,
            param: "EXP"},
        {name: "Сон",
            description: "Снижает получаемый EXP и GOLD на 24%",
            paramCount: 24,
            loss: true,
            time: 120000, // 120 SEC
            param: "EXP GOLD"},
        {name: "Удача",
            description: "Увеличивает на 4% шанс получить предмет обычного качеста",
            paramCount: 4,
            loss: false,
            time: 60000,
            param: "LUCK"},
    ]

    const renderEffects = () => {
        return effects.map((item, index) => {
            return(
                <li key={index}
                    className={toggle ? 'open' : ''}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    <figure></figure>
                    <span className="effect-time">{item.time / 1000}</span>
                    <div className="hidden-description">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <div className="short-info">
                            <div><figure><img src={time} alt=""/></figure> <i>{item.time / 1000}</i></div>
                            <div><figure><img src={type} alt=""/></figure> <i className={item.loss ? "loss" : "grown"}>{item.param}</i></div>
                        </div>
                    </div>
                </li>
            )
        })
    }

    return(
        <div className="cmp_effects">
            <div className="inn">
                <h3>Активные еффекты</h3>
                <ul>
                    {renderEffects()}
                </ul>
            </div>
        </div>
    )
}