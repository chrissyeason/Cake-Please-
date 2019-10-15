import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NewRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            ingredients: '',
            instructions: '',
            username: '',
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    handleChange =(e) =>{
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.props)
        console.log("handle submit")
        this.props.addRecipe({
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions,
            user_id: this.state.user_id
        });
        this.setState({
            modal: false
        })
    }
    
    render(){
        return(
            <div className="new-recipe">
                <Button color="white" onClick={this.toggle}>add</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Add a Recipe</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" placeholder="Title" onChange={this.handleChange}/>
                        <input type="text" name="image" placeholder="Image Address" onChange={this.handleChange}/>
                        <input type="text" name="description" placeholder="Description" onChange={this.handleChange}/>
                        <textarea type="text" name="ingredients" placeholder="Ingredients" onChange={this.handleChange}/>
                        <textarea type="text" name="instructions" placeholder="Instructions" onChange={this.handleChange}></textarea>
                        <input type="submit" value="submit" onClick={this.toggle}/>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default NewRecipe;