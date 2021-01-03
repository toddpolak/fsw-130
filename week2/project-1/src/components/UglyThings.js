import React from 'react'
import {ContextConsumer} from '../context'
import delete_img from '../img/delete.jpg'

function displayRenderer(
    uglyThingId,
    title,
    description,
    image,
    comments,
    id,
    editTitle,
    editDescription,
    editImage,
    editChangeHandler,
    comment,
    commentChangeHandler,
    addComment,
    deleteComment
    ) {
    if (id === uglyThingId) {
        return (
            <div>
                <div className='form-input'>
                    <input
                        type='text'
                        name='editTitle'
                        value={editTitle}
                        placeholder='Enter Title'
                        onChange={editChangeHandler} />
                </div>
                <div className='form-input'>
                    <textarea
                        name='editDescription'
                        placeholder='Enter Description'
                        value={editDescription}
                        onChange={editChangeHandler} />
                </div>
                <div className='form-input'>
                    <textarea
                        name='editImage'
                        placeholder='Image URL'
                        value={editImage}
                        onChange={editChangeHandler} />
                </div>
            </div>
        )
    }
    return (
        <div>
            <div>
                <div className='common'>
                    <h4>{title}</h4>
                    <div className='txt-display'>{description}</div>
                    <img src={image} alt='' />
                </div>
            </div>
            <div>
                
                <input
                    type='text'
                    className='comment-input'
                    name='comment'
                    id={`comment${uglyThingId}`}
                    placeholder='Enter Comment'
                    value={comment}
                    onChange={commentChangeHandler} />

                <button id={uglyThingId}
                    onClick={addComment}>
                    Add
                </button>
                {comments.map((item, index) => 
                    <div key={index} className='txt-display comment'>
                        <div className='comment-text'>
                            {item}
                        </div>
                        <div className='comment-delete'>
                            <img 
                                src={delete_img} 
                                className='delete-img' 
                                alt='' 
                                onClick={() => deleteComment(index, uglyThingId)} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function editRenderer(
    uglyThingId,
    title,
    description,
    image,
    id,
    editUglyThing,
    editSaveClickHandler,
    deleteUglyThing
    ) {
    if (id === uglyThingId) {
        return (
            <div className='common edit-renderer'>
                <div className='edit-renderer-btn'>
                    <button id={uglyThingId}
                        onClick={editSaveClickHandler}>
                        Save
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='common edit-renderer'>
                    <div className='edit-renderer-btn'>
                        <button onClick={() => editUglyThing(
                            uglyThingId, 
                            title,
                            description,
                            image)}>
                            Edit
                        </button>
                    </div>
                    <div className='edit-renderer-btn'>
                        <button id={uglyThingId}
                            onClick={deleteUglyThing}>
                            Delete
                        </button>
                    </div>
            </div>
        </div>
    )
}

function UglyThings() {
    return (
        <ContextConsumer>
            {context => (
                <div className='common layout'>
                    {context.uglyThings.map((item, index) => 
                        <div key={index}>
                            {editRenderer(
                                index,
                                item.title,
                                item.description,
                                item.image,
                                context.id,
                                context.editUglyThing,
                                context.editSaveClickHandler,
                                context.deleteUglyThing
                            )}
                            {displayRenderer(
                                index,
                                item.title,
                                item.description,
                                item.image,
                                item.comments,
                                context.id,
                                context.editTitle,
                                context.editDescription,
                                context.editImage,
                                context.editChangeHandler,
                                context.comment,
                                context.commentChangeHandler,
                                context.addComment,
                                context.deleteComment
                            )}
                        </div>
                    )}
                </div>
            )}
        </ContextConsumer>
    )
}

export default UglyThings
