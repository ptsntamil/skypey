import React, { Component } from 'react';
import './Chats.css';
import Chat from '../../containers/Chat';

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollBottom();
    }
    componentDidUpdate() {
        this.scrollBottom()
    }
    scrollBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        );
    }
}
export default Chats;