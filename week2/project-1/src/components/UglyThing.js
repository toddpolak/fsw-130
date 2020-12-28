import React from 'react'

function displayRenderer(
    uglyThingId,
    id,
    title,
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
                    placeholder='title'
                    onChange={editChangeHandler} />
            </div>
        )
    }
    return (
        <div>
            {title}
        </div>
    )
}

function editRenderer(
    uglyThingId,
    id,
    title,
    editUglyThing
    ) {
    if (id === uglyThingId) {
        return (
            <div></div>
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

function UglyThing(props) {

    //console.log('props: ', props)

    return (
        <div>
            {displayRenderer(
                props.uglyThingId,
                props.id,
                props.title,
                props.editTitle,
                props.editChangeHandler
            )}
            {editRenderer(
                props.uglyThingId,
                props.id,
                props.title,
                props.editUglyThing
            )}
        </div>
    )
}

export default UglyThing
