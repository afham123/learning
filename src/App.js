import { useEffect, useState } from 'react'

function App() {
    const { data, setData } = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/getData")
            .then((res) => res.json())
            .then((json) => {
                setData({ json });
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    return (
        <div className="body">
            <div className="container">
                {data === undefined ? <p>loading data...</p> :
                    data.map((elem) => {
                        return (elem.type === 'Recever' ?
                            <div className="message-blue">
                                <p className="message-content">{elem.msg}</p>
                                <div className="message-timestamp-left">{elem.time}</div>
                            </div> :
                            <div className="message-orange">
                                <p className="message-content">{elem.msg}</p>
                                <div className="message-timestamp-right">{elem.time}</div>
                            </div>
                        )
                    })}
            </div>
            <div className="sendButtons">
                <button className="sendButton">Send</button>
                <button className="createRoom">Create Room</button>
            </div>
        </div>
    );
}

export default App;
