import React, {Component} from "react"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component {
    constructor() {
        super()

        this.state = {
            uglyThings: [],
            id: '',
            newTitle: '',
            newDescription: '',
            newImage: '',
            newComment: '',
            editTitle: ''
        }
    }

    entryChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    addUglyThing = (title, image) => {
        let entry = {
            title: title,
            image: image,
            comments: []
        }

        this.setState({
            uglyThings: [...this.state.uglyThings, entry]
        })

        this.setState({
            newTitle: '',
            newImage: '',
            newDescription: ''
        })
    }

    editUglyThing = (uglyThingId, title) => {
        this.setState({
            id: uglyThingId,
            editTitle: title
        })
    }

    editChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    editSaveClickHandler = (event) => {
        let index = event.target.id
        let title = this.state.editTitle
        let uglyThings = [...this.state.uglyThings]

        uglyThings[index] = {...uglyThings[index], title: title}

        this.setState({uglyThings})
        this.setState({id: ''})
    }

    commentChangeHandler = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    addComment = (uglyThingId, comment) => {
        let uglyThings = [...this.state.uglyThings]

        uglyThings[uglyThingId].comments.push(comment)

        this.setState({uglyThings})
        this.setState({newComment: ''})
    }

    render() {
        return (
            <Provider value={{
                uglyThings: this.state.uglyThings,
                id: this.state.id,
                newTitle: this.state.newTitle,
                newDescription: this.state.newDescription,
                newImage: this.state.newImage,
                editTitle: this.state.editTitle,
                newComment: this.state.newComment,
                entryChangeHandler: this.entryChangeHandler,
                addUglyThing: this.addUglyThing,
                editUglyThing: this.editUglyThing,
                editChangeHandler: this.editChangeHandler,
                editSaveClickHandler: this.editSaveClickHandler,
                commentChangeHandler: this.commentChangeHandler,
                addComment: this.addComment
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer as ContextConsumer}
