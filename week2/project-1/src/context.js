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
            title: '',
            image: '',
            description: ''
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

    addComment = (uglyThingId) => {
        let uglyThings = [...this.state.uglyThings]

        //uglyThings[uglyThingId].comments.push(comment)

        uglyThings[uglyThingId].comments.push(this.state.comment)

        this.setState({uglyThings})
        this.setState({comment: ''})
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
