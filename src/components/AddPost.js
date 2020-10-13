import React, { Component } from 'react'
import { connect } from 'react-redux'
import {v4 as uuidv4} from 'uuid'
import { createPost } from '../actions/postActions'

class AddPost extends Component {
    state = {
        post: {
            id: '',
            title: "",
            content: "",
        },
    }

    handlechange = (e) => {
        this.setState({
            post: {
                ...this.state.post, [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        //createPost action to update store
        e.preventDefault() 
        this.props.createPost(this.state.post)
        this.setState({
            post: {
                id: uuidv4(),
                title: '',
                content: ''
            }
        })
    }
    render() {
        return (
            <div className='container' style= { {margin: '4rem auto '}}>
                <h5 className='blue-text center-align'>Todo Redux</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor="post-title">Title</label>
                        <input onChange={this.handlechange} type="text" name="title" value={this.state.post.title} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor="post-content">Content</label>
                        <textarea onChange={this.handlechange} name='content' className='materialize-textarea' value={this.state.post.content}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className="btn blue" type="submit">
                            Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createPost
}


export default connect(null, mapDispatchToProps)(AddPost)
