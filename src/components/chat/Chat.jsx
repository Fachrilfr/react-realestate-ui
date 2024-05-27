import './chat.scss';
import { useState } from 'react';

function Chat(){
    const [chat,setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/ara.jpg" alt="" />
                    <span>Mutiara Cantik</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="/elon.jpeg" alt="" />
                    <span>Elon Musk</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="/elon.jpeg" alt="" />
                    <span>Elon Musk</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="/elon.jpeg" alt="" />
                    <span>Elon Musk</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="/elon.jpeg" alt="" />
                    <span>Elon Musk</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
                <div className="message">
                    <img src="/elon.jpeg" alt="" />
                    <span>Elon Musk</span>
                    <p>
                        Lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>

            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="/ara.jpg" alt="" />
                            Mutiara Cantik
                        </div>
                        <span className="close" onClick={()=>setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMessage own">
                            <p>halo...</p>
                            <span>3 jam yang lalu</span>
                        </div>
                        <div className="chatMessage">
                            <p>halo juga</p>
                            <span>2 jam yang lalu</span>
                        </div>
                        <div className="chatMessage own">
                            <p>ini benar dengan mutiara yg jual property?</p>
                            <span>2 jam yang lalu</span>
                        </div>
                        <div className="chatMessage">
                            <p>iya mas benar, ada yang bisa dibantu?</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage own">
                            <p>ngga cuman nanya aja</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage">
                            <p>halo apa kabar</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage own">
                            <p>halo apa kabar</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage">
                            <p>halo apa kabar</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage own">
                            <p>halo apa kabar</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        <div className="chatMessage">
                            <p>halo apa kabar</p>
                            <span>1 jam yang lalu</span>
                        </div>
                        
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
        )}
        </div>
    );
}

export default Chat;