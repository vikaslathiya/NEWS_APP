import React, {Fragment, useEffect, useState} from 'react'
import NewsItems from '../../components/NewsItems/NewsItems'
import Spinner from '../../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";

const News = (props) => {
    const [response, setResponse] = useState({})
    const [articles, setarticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [totalPagesReq, setTotalPagesReq] = useState(1)
    const {socket} = useSelector(state => state.socket)

    useEffect(() => {
        socket.on('get news', (data) => {
            setResponse(data)
        })
    }, [socket])

    useEffect(() => {
        if (response && response?.articles !== undefined) {
            if (articles?.length >= 10) {
                console.log('moreNews', response)
                setarticles(articles.concat(response?.articles))
            } else {
                console.log('firstRender', response)
                setarticles(response?.articles);
                setLoading(false);
                props.setProgress(100);
            }
            setTotalResults(response.totalResults);
        }
    }, [response])

    useEffect(() => {
        console.log('articles', articles)
    }, [articles])

    useEffect(() => {
        const totalPages = Math.round(totalResults / props.pagesize)
        setTotalPagesReq(totalPages)
        console.log(totalPages)
    }, [totalResults, props.pagesize])

    // for Capital First Letter
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const getNewsSocket = () => {
        console.log(totalPagesReq, page)
        if (page - 1 !== totalPagesReq) {
            setPage(page + 1)
            socket.emit("get news", {
                'category': props.category,
                'country': props.country,
                'page': page,
                'pageSize': props.pagesize
            })
        }

    }

    const updateNews = async () => {
        props.setProgress(10);
        // let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`
        // setPage(page + 1);
        setLoading(true);
        getNewsSocket()
        // let data = await fetch(url);
        props.setProgress(30);
        // let parsedData = await data.json();
        props.setProgress(50);
        // console.log(parsedData)
        // setarticles(parsedData.articles);
        // setTotalResults(parsedData.totalResults);
        // props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News4You`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        getNewsSocket()
        // setPage(page + 1);
        // let url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pagesize=${props.pagesize}`
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // setarticles(articles.concat(parsedData.articles))
        // setTotalResults(parsedData.totalResults)
    };

    // const handlePreviousClick = async () => {
    //     setPage(page - 1)
    //     updateNews();
    // }
    // const handleNextClick = async () => {
    //     setPage(page + 1)
    //     updateNews();
    // }

    return (
        <Fragment>
            <Grid item md={12} sm={12}>
                <Typography component={'h1'} style={{
                    margin: '35px',
                    marginTop: '80px',
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                    fontSize: '2rem'
                }}>
                    News4You - Top Headlines from {capitalizeFirstLetter(props.category)}
                </Typography>
                {loading && <Spinner/>}
            </Grid>

            <InfiniteScroll
                dataLength={articles?.length}
                next={fetchMoreData}
                hasMore={(page - 1 !== totalPagesReq) && (articles?.length !== totalResults)}
                loader={<Spinner/>}
            >
                <Grid container spacing={2} style={{marginTop: 15, padding: 6}}>
                    {articles?.map(element => (
                        <NewsItems title={element.title ? element.title.slice(0, 45) : ""}
                                   description={element.description ? element.description.slice(0, 88) : ""}
                                   imageUrl={element.urlToImage}
                                   url={element.url} author={element.author}
                                   date={element.publishedAt}
                                   source={element.source.name}
                        />
                    ))}
                </Grid>
            </InfiniteScroll>
            {/* Previous and Next Buttons */
            }
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}> &larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pagesize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
                </div> */
            }
        </Fragment>
    )

}

export default News