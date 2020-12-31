import React from 'react'
import {ContextConsumer} from '../context'

function displayRenderer(
    uglyThingId,
    id,
    title,
    description,
    image,
    comments,
    editTitle,
    editDescription,
    editImage,
    editChangeHandler,
    commentChangeHandler,
    addComment
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
                    onClick={() => addComment(uglyThingId)}>
                    Add Comment
                </button>
                {comments.map((item, index) => 
                    <div key={index}>
                        {item}
                    </div>
                )}
            </div>
        </div>
    )
}

function editRenderer(
    uglyThingId,
    id,
    title,
    description,
    image,
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
            </div>
            <div>
                <button id={uglyThingId}
                    onClick={() => deleteUglyThing}>
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
                                context.id,
                                item.title,
                                item.description,
                                item.image,
                                context.editUglyThing,
                                context.editSaveClickHandler,
                                context.deleteUglyThing
                            )}
                            {displayRenderer(
                                index,
                                context.id,
                                item.title,
                                item.description,
                                item.image,
                                item.comments,
                                context.editTitle,
                                context.editDescription,
                                context.editImage,
                                context.editChangeHandler,
                                context.commentChangeHandler,
                                context.addComment
                            )}
                        </div>
                    )}
                </div>
            )}
        </ContextConsumer>
    )
}

export default UglyThings
