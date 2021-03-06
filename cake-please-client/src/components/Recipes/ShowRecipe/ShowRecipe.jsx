import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';
import '../Recipes.css';
import './showRecipe.css';

class ShowRecipe extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false
        }
        this.toggle = this.toggle.bind(this);
        // currentUser = this.props.username
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }
    
    render(){
        console.log(this.props.ingredients, "this is ingredients console")
        
        let ingredients = ''
        if (this.props.ingredients !== null) {
           ingredients= this.props.ingredients.map(function(ingredient, i){
                const key = `ingredient-${i}`;
                return( <li key={key}>{ingredient}</li>)
            })
        }
        let instructions = ''
        if (this.props.instructions !== null) {
            instructions = this.props.instructions.map(function(instruction, i){
                const key = `instruction-${i}`;
                return( <li key={key}>{instruction}</li>)
            })
        }
      return(       
            <div className="show-recipe">
                <Button id="show-button" color="white" onClick={this.toggle}><img src={this.props.image}/><h5>{this.props.title}</h5></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader id="show-modal-header" toggle={this.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    <img src={this.props.image} className="modal-image"/>
                    <h1>{this.props.title}</h1>
                    <h4 className="description">{this.props.description}</h4>
                    <h5>ingredients</h5>
                    <ul>
                        {ingredients} 
                    </ul>
                    <br></br>
                    <h5>instructions</h5>

                    <ol>
                        {instructions}
                    </ol>
                    
                
                </ModalBody>
                <ModalFooter>
                        <button className="delete-button" onClick={() => {this.props.deleteRecipe(this.props.id)}}>delete</button>
                
                    
                        <UpdateRecipe updateRecipe={this.props.updateRecipe}
                        title={this.props.title}
                        image={this.props.image}
                        description={this.props.description}
                        ingredients={this.props.ingredients}
                        instructions={this.props.instructions}
                        id={this.props.id}
                        />  

                </ModalFooter>
                </Modal>
            </div>        
        )  
    }  
}

export default ShowRecipe;