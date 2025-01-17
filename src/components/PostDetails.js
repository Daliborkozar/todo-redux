import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class PostDetails extends Component {
    render() {
        const {post} = this.props
        return (
            <div className='col s12 m6'>
                <div className='card'>
                <div className='card-content'>
                    <span className='card-title'>{post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className='card-action'>
                    <button onClick={()=> this.props.deletePost(post.id)} className='btn red'>Delete</button>
                </div>
                </div>
                
            </div>
        )
    }
}

//Ovde nemamo mapStateToProps vec nam treba promena state sa mapDispatchToProps

const mapDispatchToProps = {
    deletePost
    
}

export default connect(null, mapDispatchToProps)(PostDetails)
