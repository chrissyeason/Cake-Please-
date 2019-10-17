import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe';
import '../Recipes.css';

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
      return(       
            <div className="show-recipe">
                <Button id="show-button" color="white" onClick={this.toggle}><img src={this.props.image}/><h5>{this.props.title}</h5></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader id="show-modal-header" toggle={this.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    <img src={this.props.image} className="modal-image"/>
                    <h1>{this.props.title}</h1>
                    <p className="description">{this.props.description}</p>
                    <h4>{this.props.ingredients}</h4>
                    <p>{this.props.instructions}</p>
                
                
                        <button onClick={() => {this.props.deleteRecipe(this.props.id)}}>delete</button> :
                
                    
                        <UpdateRecipe updateRecipe={this.props.updateRecipe}
                        title={this.props.title}
                        image={this.props.image}
                        description={this.props.description}
                        ingredients={this.props.ingredients}
                        instructions={this.props.instructions}
                        id={this.props.id}
                        />  

                </ModalBody>
                </Modal>
            </div>        
        )  
    }  
}

export default ShowRecipe;