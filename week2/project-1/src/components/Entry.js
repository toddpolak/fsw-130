import React from 'react'
import {ContextConsumer} from '../context'

function Entry() {
    return (
        <ContextConsumer>
            {context => (
                <div>
                    <form>
                        <div>
                            <input
                                type='text'
                                name='title'
                                placeholder='Title'
                                value={context.title}
                                onChange={context.entryChangeHandler}
                            />
                        </div>
                        <div>
                            <textarea
                                name='image'
                                placeholder='Image'
                                value={context.image}
                                onChange={context.entryChangeHandler}
                            />
                        </div>
                    </form>
                    <button onClick={() => {
                        context.addUglyThing(
                            context.title,
                            context.image)}}>Add</button>
                </div>
            )}
        </ContextConsumer>
    )
}

export default Entry
