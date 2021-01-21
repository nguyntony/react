import React from 'react'

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.likes || 0
        }
    }
    // 'this' has access to pretty much anything inside of class, it's like an object, right now it has access to state

    render() {
        return (
            <>
            <button onClick={this._decrementLikes}>Unlike</button>
            <span>{this.state.likes}</span>
            <button onClick={this._incrementLikes}>Like</button>
            </>
        );
    }

    _incrementLikes = (e) => {
        this.setState({
            likes: this.state.likes + 1
        }, () => {
            console.log('finished updating likes')
        })
    }

    _decrementLikes = (e) => {
        this.setState({
            likes: this.state.likes - 1
        }, () => {
            console.log('finished unliking')
        })
    }
}

export default LikeButton;