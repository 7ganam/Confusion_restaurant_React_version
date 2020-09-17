import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';



class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render_card = (dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} >
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
            </div>

        )
    }

    render_comments = (dish) => {
        const comment_list = dish.comments.map((comment) => {
            return (
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

            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h1>
                    Comments
            </h1>
                <ul class="list-unstyled">
                    {comment_list}
                </ul>
            </div>
        )

    }

    render() {


        const dish = this.props.dish;

        return (
            <div className="row">
                {this.render_card(dish)}
                {this.render_comments(dish)}
            </div>
        );
    }

}
export default DishDetail;