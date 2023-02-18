import "./Main.css"
import { useState } from 'react';

function Main() {
    const [on, setOn] = useState(false);
    const [off, setOff] = useState(true);

    const [onn, setOnn] = useState(false);
    const [offf, setOfff] = useState(true);

    const [onnn, setOnnn] = useState(false);
    const [offff, setOffff] = useState(true);
    return <div className="Cards">

        
        {/* // КАРТОЧКА // */}
        <div className="MainCards">
            <div className="card">

                <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
                <p className="TextCard">Nike air 1 <span style={{
                    color: "black",
                    fontWeight: "bold",
                }}>Размеры 40,41,42,43,44,45</span>
                </p>
                <div>
                    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>14.990 рублей</span>
                    </span>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "30%",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            margin: "0%",
                        }}
                        >+</span>
                    </button>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
                </div>
            </div>


            <div className="card">

                <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
                <p className="TextCard">Nike<span style={{
                    color: "black",
                    fontWeight: "bold",
                }}>Размеры 40,41,42,43,44,45</span>
                </p>
                <div>
                    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>14.990 рублей</span>
                    </span>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "30%",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            margin: "0%",
                        }}
                        >+</span>
                    </button>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
                    </button>
                </div>
            </div>


            <div className="card">

                <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
                <p className="TextCard">Nike<span style={{
                    color: "black",
                    fontWeight: "bold",
                }}>Размеры 40,41,42,43,44,45</span>
                </p>
                <div>
                    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>14.990 рублей</span>
                    </span>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "30%",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            margin: "0%",
                        }}
                        >+</span>
                    </button>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "1%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
                    </button>
                </div>
            </div>

            <div className="card">

    <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
    <p className="TextCard">Nike<span style={{
        color: "black",
        fontWeight: "bold",
    }}>Размеры 40,41,42,43,44,45</span>
    </p>
    <div>
        <span className="TextCard">Цена: <br /><span className="TextCard" style={{
            color: "black",
            fontWeight: "bold",
        }}>14.990 рублей</span>
        </span>
        <button style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            marginLeft: "30%",
            borderRadius: "10px",
            backgroundColor: "white"
        }}>
            <span style={{
                fontWeight: "bold",
                margin: "0%",
            }}
            >+</span>
        </button>
        <button style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            marginLeft: "3%",
            borderRadius: "100px",
            backgroundColor: "white"
        }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
        </button>
    </div>
    </div>           





        </div>
        </div>
}


        export default Main;