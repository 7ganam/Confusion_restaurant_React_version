import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        < div className="col-12 col-md-5 m-1" >
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
function RenderComments({ comments }) {
    const comment_list = comments.map((comment) => {
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

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null) {

        return (

            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );

    }
    else {
        return (<div></div>)
    }

}


export default DishDetail;