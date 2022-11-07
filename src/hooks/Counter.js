import React, { useState } from 'react'
import '../styles/Counter.css';

function Counter() {
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(true)
    const right = [
        {
            id: 1,
            value: 7,
            display: "7",
            type: "primary",
        },
        {
            id: 2,
            value: 8,
            display: "8",
            type: "primary",
        },
        {
            id: 3,
            value: 9,
            display: "9",
            type: "primary",
        },
        {
            id: 4,
            value: 4,
            display: "4",
            type: "primary",
        },
        {
            id: 5,
            value: 5,
            display: "5",
            type: "primary",
        },
        {
            id: 6,
            value: 6,
            display: "6",
            type: "primary",
        },
        {
            id: 7,
            value: 1,
            display: "1",
            type: "primary",
        },
        {
            id: 8,
            value: 2,
            display: "2",
            type: "primary",
        },
        {
            id: 9,
            value: 3,
            display: "3",
            type: "primary",
        },
        {
            id: 10,
            value: " ",
            display: " ",
            type: "primary",
        },
        {
            id: 11,
            value: 0,
            display: "0",
            type: "primary",
        },
        {
            id: 12,
            value: " ",
            display: " ",
            type: "primary",
        },
    ]

    const handlePlus = () => setCount(count + 1)
    const handleMinus = () => setCount(count - 1)
    const handleReset = () => setCount(0)
    const handlePress = () => setVisible(!visible)
    const handleButton = (item) => {
        let newCount = count + "" + item.value
        setCount(parseFloat(newCount))
    }


    return (
        <div className='main'>

            <div className='display'>
                <input type="number" value={count} />
            </div>

            <div className="buttons">
                <div className="left">
                    <div className='top'>
                        <p onClick={() => handleReset()} style={{ backgroundColor: "#d20c08" }}>Reset</p>
                        <p onClick={() => handleMinus()}>{"-"}</p>
                    </div>
                    <div className='bottom'>
                        <p onClick={() => handlePlus()}>{"+"}</p>
                    </div>
                </div>

                {!visible &&
                    <div className='set_count'>
                        <p onClick={() => handlePress()}>Set Count</p>
                    </div>
                }

                {visible &&

                    <div className="right">
                        <div id="right_buttons">
                            {right.map((item) => (
                                <section>
                                    <p onClick={() => handleButton(item)} className={item.type}>{item.display}</p>
                                </section>
                            ))}
                        </div>
                        <div onClick={() => handlePress()} className='horizontal'>
                            <p>
                                <p>Close</p>
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Counter