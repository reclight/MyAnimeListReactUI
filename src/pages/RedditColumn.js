import React from 'react';
import RedditCard from './RedditCard';
import { Container , Row, Col } from 'react-bootstrap';
import AppHeader from './AppHeader';
import axios from 'axios';
import { connect } from 'net';


class RedditColumn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            redditlist: [],
            searchlist: [],
            pageHeader:"r/anime"
        };

    }

    componentDidMount(){
        axios.get('https://reddit.com/r/anime/.json')
            .then(resp => {
                this.setState({
                    redditlist: resp.data.data.children,
                    searchlist: resp.data.data.children
                });
                console.log("Successful")
                console.log(this.state.searchlist);
            })
            .catch(console.error);
    }

    handleChange = (e) => {
        var list=[];
        console.log(e.target.value);
        var filter=e.target.value.toLowerCase();
        var li = this.state.animelist;
        for (var i = 0; i < li.length; i++) {
            var txtValue = li[i];
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                list.push(txtValue);
            } 
            console.log(list);
            this.setState({
                searchlist: list
            });
        }
    }

    render(){
        return (
            <div className="right-column">
                <Container>
                    <AppHeader headertitle={this.state.pageHeader} />
                    <input placeholder="Search Anime" className="search-input" onKeyUp={this.handleChange} />
                    <Row>
                        {this.state.searchlist.map((content, id) =>
                            <RedditCard title={content.data.title} />
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

RedditColumn.propTypes = {
    
};

export default RedditColumn;