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
                    placeholder='Enter Title'
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
                props.editUglyThing,
                props.editSaveClickHandler
            )}
        </div>
    )

}

export default UglyThing
