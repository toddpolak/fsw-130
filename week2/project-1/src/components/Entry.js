import React from 'react'
import {ContextConsumer} from '../context'

function Entry() {
    return (
        <ContextConsumer>
            {context => (
                <div className='common'>
                    <h2>Ugly Things</h2>
                    <div>
                        <form>
                            <div>
                                <input
                                    type='text'
                                    name='newTitle'
                                    placeholder='Title'
                                    value={context.newTitle}
                                    onChange={context.entryChangeHandler}
                                />
                            </div>
                            <div>
                                <textarea
                                    name='newImage'
                                    placeholder='Image'
                                    value={context.newImage}
                                    onChange={context.entryChangeHandler}
                                />
                            </div>
                        </form>
                        <button onClick={() => {
                            context.addUglyThing(
                                context.newTitle,
                                context.newImage)}}>Add</button>
                    </div>
                </div>
            )}
        </ContextConsumer>
    )
}

export default Entry
