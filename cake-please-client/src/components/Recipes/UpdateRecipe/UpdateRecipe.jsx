import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../NewRecipe/newRecipe.css'

class UpdateRecipe extends Component {
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
        console.log("handle submit update")
        const ingredientList = this.state.ingredients.split("\n");
        const instructionsList = this.state.instructions.split("\n");

        this.props.updateRecipe(this.props.id,{ 
            title: this.state.title,
            image: this.state.image,
            description: this.state.description,
            ingredients: ingredientList,
            instructions: instructionsList,});
        this.setState({
            modal: false
        })
    }
    
    render(){
        return(
            <div className="update-recipe">
                <Button id="update-button" color="white" onClick={this.toggle}>update</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Update the Recipe</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" placeholder={this.props.title} onChange={this.handleChange}/>
                        <input type="text" name="image" placeholder="Image Address" onChange={this.handleChange}/>
                        <input type="text" name="description" placeholder={this.props.description} onChange={this.handleChange}/>
                        <textarea type="text" name="ingredients" placeholder={this.props.ingredients} onChange={this.handleChange}/>
                        <textarea type="text" name="instructions" placeholder={this.props.ingredients} onChange={this.handleChange}></textarea>
                        <input type="submit" value="submit" onClick={this.toggle}/>
                    </form>
                </ModalBody>
                </Modal>
            </div>
        )
    }
}
export default UpdateRecipe;