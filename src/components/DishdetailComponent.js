import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,
    Label, Row, Col
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function RenderDish({ dish }) {
    return (
        < div  >
            <Card  >
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>

            </Card>
        </div >

    )

}

function RenderComments(props) {
    const comment_list = props.comments.map((comment) => {
        return (
            <div>
                <li>
                    <p style={{ textAlign: 'left' }}>
                        {comment.comment}
                    </p>
                    <div>
                        <p style={{ textAlign: 'left' }}>
                            -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </div>
                </li>
            </div>
        );
    });

    return (
        <div >
            <h1>
                Comments
        </h1>
            <ul class="list-unstyled">
                {comment_list}
            </ul>
            <Button outline onClick={props.toggle_handler} ><span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>

        </div>
    )

}

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);

    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        // alert("test")
    }
    handleSubmit(values) {
        console.log(values)
    }
    render() {
        const dish = this.props.dish;
        if (dish != null) {

            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments toggle_handler={this.toggleModal} comments={this.props.comments} />
                        </div>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="rating" md={2}>Rating</Label>
                                        <Col md={0}>
                                            <Control.select model=".rating" id="rating"
                                                name="rating"
                                                className="form-control"
                                                placeholder=" rating"
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="Name" md={2}>Your Name</Label>
                                        <Col md={10}>
                                            <Control.text model=".Name" id="Name" name="Name"
                                                placeholder=" Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".Name"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                    </Row>


                                    <Row className="form-group">
                                        <Label htmlFor="message" md={2}>Comment</Label>
                                        <Col md={10}>
                                            <Control.textarea model=".message" id="message" name="message"
                                                rows="12"
                                                className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{ size: 10, offset: 2 }}>
                                            <Button type="submit" color="primary">
                                                Send Feedback
                                            </Button>
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );

        }
        else {
            return (<div></div>)
        }
    }
}


export default DishDetail;