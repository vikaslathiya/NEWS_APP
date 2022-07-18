import React, {Fragment} from 'react'
import {Badge, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {useNewsItemStyle} from "./style";

const NewsItems = (props) => {
    const {title, description, imageUrl, url, author, date, source} = props;
    const myStyle = useNewsItemStyle()

    return (
        <Fragment>
            <Badge badgeContent={source} color="secondary" className={myStyle.badge}>
                <Card sx={{maxWidth: 345}} className={myStyle.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            // image={!imageUrl ? "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2021/11/20/1006195-partial-lunar-eclipse-reuters2.jpg" : imageUrl}
                            image={imageUrl}
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
