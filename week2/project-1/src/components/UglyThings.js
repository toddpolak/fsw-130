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
                <div style={{border: '1px solid red'}}>
                    <div>{title}</div>
                    <div>{description}</div>
                    <img src={image} alt='' />
                </div>
            </div>
            <div style={{border: '1px solid blue'}}>
                <input
                    type='text'
                    name='comment'
                    id={`comments${uglyThingId}`}
                    placeholder='Enter Comment'
                    onChange={commentChangeHandler} />
                <button id={uglyThingId}
                    onClick={addComment}>
                    Add Comment
                </button>
                {comments.map((item, index) => 
                    <div key={index}>
                        <img 
                            src={delete_img} 
                            className='delete-img' 
                            alt='' 
                            onClick={() => deleteComment(index, uglyThingId)} />
                            {item}
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
            <div>
                <button id={uglyThingId}
                    onClick={editSaveClickHandler}>
                    Save
                </button>
            </div>
        )
    }
    return (
        <div>
            <div>
                <button onClick={() => editUglyThing(
                    uglyThingId, 
                    title,
                    description,
                    image)}>
                    Edit
                </button>
                <button id={uglyThingId}
                    onClick={deleteUglyThing}>
                    Delete
                </button>
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
