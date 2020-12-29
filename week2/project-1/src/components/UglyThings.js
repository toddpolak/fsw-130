import React from 'react'
import {ContextConsumer} from '../context'

function displayRenderer(
    uglyThingId,
    id,
    title,
    image,
    comments,
    editTitle,
    editChangeHandler,
    newComment,
    commentChangeHandler,
    addComment
    ) {
    if (id === uglyThingId) {
        return (
            <div>
                <input
                    type='text'
                    name='editTitle'
                    value={editTitle}
                    placeholder='Enter Title'
                    onChange={editChangeHandler} />
            </div>
        )
    }
    return (
        <div>
            <div>
                {title}
                <img src={image} alt='' />
                {comments.map((item, index) => 
                    <div key={index}>
                        {item}
                    </div>
                )}
            </div>
            <div>
                <input
                    type='text'
                    name='newComment'
                    value={newComment}
                    placeholder='Enter Comment'
                    onChange={commentChangeHandler} />
                <button onClick={() => addComment(uglyThingId, newComment)}>
                    Add Comment
                </button>
            </div>
        </div>
    )
}

function editRenderer(
    uglyThingId,
    id,
    title,
    image,
    editUglyThing,
    editSaveClickHandler
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
            <button onClick={() => editUglyThing(uglyThingId, title)}>
                Edit
            </button>
        </div>
    )
}

function UglyThings() {
    return (
        <ContextConsumer>
            {context => (
                <div>
                    {context.uglyThings.map((item, index) => 
                        <div key={index}>
                            {displayRenderer(
                                index,
                                context.id,
                                item.title,
                                item.image,
                                item.comments,
                                context.editTitle,
                                context.editChangeHandler,
                                context.newComment,
                                context.commentChangeHandler,
                                context.addComment
                            )}
                            {editRenderer(
                                index,
                                context.id,
                                item.title,
                                item.image,
                                context.editUglyThing,
                                context.editSaveClickHandler
                            )}
                        </div>
                    )}
                </div>
            )}
        </ContextConsumer>
    )
}

export default UglyThings
