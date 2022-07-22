import React, {Fragment} from 'react'
import {Badge, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useNewsItemStyle} from "./style";
import noImage from '../../Assets/no-image.png'

const NewsItems = (props) => {
    const {title, description, imageUrl, url, author, date, source} = props;
    const myStyle = useNewsItemStyle()

    return (
        <Fragment>
            <Badge badgeContent={source} color="secondary" className={myStyle.badge}>
                <Card sx={{maxWidth: 345}} className={myStyle.card}>
                    <CardActionArea>
                        <CardMedia
                            className={myStyle.cardMedia}
                            component="img"
                            height="250"
                            image={!imageUrl ? noImage : imageUrl}
                            alt={title}
                        />
                        <CardContent className={myStyle.cardContent}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {description}
                            </Typography>
                            <Typography variant="subtitle2" component={'p'} color="textSecondary">
                                By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={myStyle.cardAction}>
                        <a href={url} target={'_blank'} rel="noreferrer">Read more</a>
                    </CardActions>
                </Card>
            </Badge>
        </Fragment>
    )
}
export default NewsItems
