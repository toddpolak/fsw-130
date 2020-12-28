import React from 'react'
import {ContextConsumer} from '../context'
import UglyThing from './UglyThing'

function UglyThings() {
    return (
        <ContextConsumer>
            {context => (
                <div>
                    {context.uglyThings.map((item, index) => 
                        <UglyThing 
                            key={index} 
                            id={context.id}
                            uglyThingId={index}
                            title={item.title}
                            editTitle={context.editTitle}
                            editUglyThing={context.editUglyThing}
                            editChangeHandler={context.editChangeHandler}
                            editSaveClickHandler={context.editSaveClickHandler} />
                    )}
                </div>
            )}
        </ContextConsumer>
    )
}

export default UglyThings
