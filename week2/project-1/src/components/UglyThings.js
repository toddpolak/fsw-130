import React from 'react'
import {ContextConsumer} from '../context'

function displayRenderer(
    uglyThingId,
    id,
    title,
    image,
    editTitle,
    editChangeHandler
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
            {title}
            <img src={image} alt='' />
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
                                context.editTitle,
                                context.editChangeHandler
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
