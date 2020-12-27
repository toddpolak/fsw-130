import React from 'react'
import {AnimalContextConsumer} from '../animalContext'

function Animals() {
    return (
        <AnimalContextConsumer>
            {context => (
                <div>
                    {context.animals.map((item, index) => 
                        <div key={index} className='animal'>
                            {item.animal}
                        </div>
                    )} 
                </div>
            )}
        </AnimalContextConsumer>
    )
}

export default Animals
