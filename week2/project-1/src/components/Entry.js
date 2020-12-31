import React from 'react'
import {ContextConsumer} from '../context'

function Entry() {
    return (
        <ContextConsumer>
            {context => (


                <div className='common'>

                    <form>

                        <div className='form-input'>
                            <input
                                type='text'
                                name='title'
                                placeholder='Enter Title'
                                value={context.title}
                                onChange={context.entryChangeHandler} />
                        </div>

                        <div className='form-input'>
                            <textarea
                                name='description'
                                placeholder='Enter Description'
                                value={context.description}
                                onChange={context.entryChangeHandler} />
                        </div>
                        
                        <div className='form-input'>
                            <textarea
                                name='image'
                                placeholder='Image URL'
                                value={context.image}
                                onChange={context.entryChangeHandler} />
                        </div>


                    </form>

                    <button onClick={() => {
                        context.addUglyThing()}}>Add</button>
                </div>
            )}
        </ContextConsumer>
    )
}

export default Entry
