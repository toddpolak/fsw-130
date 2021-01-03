import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            uglyThings: [],
            id: '',
            title: '',
            description: '',
            image: '',

            comment: '',
            enteredComments: [],

            editTitle: '',
            editDescription: '',
            editImage: ''
        }
    }

    entryChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    addUglyThing = () => {
        let entry = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            comments: []
        }

        /*
        this.setState((prevState) => ({
            uglyThings: [...prevState.uglyThings, entry]
        }))
        */

        this.setState({
            uglyThings: [...this.state.uglyThings, entry]
        })
        
        this.setState({
            title: '',
            image: '',
            description: ''
        })
        /*
        <input
            type='text'
            className='comment-input'
            name='comment'
            id={`comment${uglyThingId}`}
            placeholder='Enter Comment'
            value={comment}
            onChange={commentChangeHandler} />
        */
    }
    
    editUglyThing = (uglyThingId, title, description, image) => {
        this.setState({
            id: uglyThingId,
            editTitle: title,
            editDescription: description,
            editImage: image
        })
    }

    editChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    editSaveClickHandler = (event) => {
        const uglyThingId = event.target.id
        let uglyThings = [...this.state.uglyThings]

        uglyThings[uglyThingId] = {...uglyThings[uglyThingId], 
            title: this.state.editTitle,
            description: this.state.editDescription,
            image: this.state.editImage
        }
        
        this.setState({uglyThings})
        this.setState({id: ''})
    }

    deleteUglyThing = (event) => {
        const uglyThingId = event.target.id
        let uglyThings = [...this.state.uglyThings]

        uglyThings.splice(uglyThingId, 1)

        this.setState({uglyThings})
    }
    
    commentChangeHandler = (event) => {

        //const {name, value} = event.target

        let enteredComments = [...this.state.enteredComments]

        enteredComments[event.target.dataset.id] = event.target.value

        this.setState({ enteredComments }, () => console.log(this.state.enteredComments))

        //this.setState({[name]: value})
    }
    
    addComment = (event) => {
        const uglyThingId = event.target.id
        //const txtComment = document.getElementById(`comment${uglyThingId}`)
        let uglyThings = [...this.state.uglyThings]

        console.log(this.state.enteredComments[uglyThingId])

        //if (txtComment.value !== '' && txtComment.value === this.state.comment) {

            //uglyThings[uglyThingId].comments.push(this.state.comment)

            uglyThings[uglyThingId].comments.push(this.state.enteredComments[uglyThingId])

            //uglyThings[uglyThingId].comments.push(txtComment.value)

            this.setState({uglyThings})
            this.setState({comment: ''})

            this.setState({
                enteredComments: []
            })
            
        //}

        //txtComment.value = ''
    }

    deleteComment = (index, uglyThingId) => {
        let uglyThings = [...this.state.uglyThings]

        uglyThings[uglyThingId].comments.splice(index, 1)

        this.setState({uglyThings})
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                id: this.state.id,
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                comment: this.state.comment,
                editTitle: this.state.editTitle,
                editDescription: this.state.editDescription,
                editImage: this.state.editImage,
                entryChangeHandler: this.entryChangeHandler,
                addUglyThing: this.addUglyThing,
                editUglyThing: this.editUglyThing,
                editChangeHandler: this.editChangeHandler,
                editSaveClickHandler: this.editSaveClickHandler,
                deleteUglyThing: this.deleteUglyThing,
                commentChangeHandler: this.commentChangeHandler,
                addComment: this.addComment,
                deleteComment: this.deleteComment,
                enteredComments: this.state.enteredComments
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}
