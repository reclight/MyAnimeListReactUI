import React from 'react';
import AnimeCard from './AnimeCard';
import { Container , Row, Col } from 'react-bootstrap';
import AppHeader from './AppHeader';
import axios from 'axios';


class AnimeColumn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            animelist: [],
            searchlist: [],
            pageHeader:"This is your anime list"
        };

    }

    
    
    componentDidMount(){
        axios.get('https://api.jikan.moe/v3/user/Rec_light/animelist')
            .then(resp => {
                this.setState({
                    animelist: resp.data.anime,
                    searchlist: resp.data.anime
                });
            })
            .catch(console.error);
    }

    handleChange = (e) => {
        var list=[];
        console.log(e.target.value);
        var filter=e.target.value.toLowerCase();
        var li = this.state.animelist;

        li.forEach(function(lists){
            if(lists.title.toLowerCase().indexOf(filter) > -1) {
                list.push(lists);
            }
        });

        this.setState({
            searchlist: list
        });
        /*for (var i = 0; i < li.length; i++) {
            var txtValue = li[i];
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                list.push(txtValue);
            } 
            console.log(list);
            this.setState({
                searchlist: list
            });
        }*/
    }

    render(){
        return (
            <div className="right-column">
                <Container>
                    <AppHeader headertitle={this.state.pageHeader} />
                    <input placeholder="Your MAL Username" className="search-input" onKeyUp={this.handleChange} />
                    <Row>
                        {this.state.searchlist.map((content, id) =>
                            <AnimeCard key={content.mal_id} title={content.title} image={content.image_url} link={"/anime/"+content.mal_id} watch_status={content.watching_status} />
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

AnimeColumn.propTypes = {
    
};

export default AnimeColumn;