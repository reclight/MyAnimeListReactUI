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
            pageHeader:"This is your anime list",
            searchUser: '',
            searchAnimeKeyword: '',
            userSearched: 'rec_light',
            searchStatusKeyword: [0, 1, 2, 3]
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

    handleSearchInputChange = (e) => {
        let searchTitle = e.target.value.toLowerCase();
        this.setState({
            searchAnimeKeyword: searchTitle
        });

        this.handleSearchChange(searchTitle, this.state.searchStatusKeyword);
    }

    handleSearchStatusChange = (e) => {
        let status = [];
        if(e.target.value === "0"){
            status = [0, 1, 2, 3];
        }
        else{
            status = [parseInt(e.target.value)];
        }

        this.setState({
            searchStatusKeyword:status
        });

        this.handleSearchChange(this.state.searchAnimeKeyword, status);
    }

    handleSearchChange = (searchAnimeKeyword, searchStatusKeyword) => {
        var list=[];
        var titleFilter=searchAnimeKeyword;
        var watchStatusFilter = searchStatusKeyword;
        var li = this.state.animelist;

        li.forEach(function(lists){
            if(watchStatusFilter.includes(lists.watching_status) && lists.title.toLowerCase().indexOf(titleFilter) > -1) {
                list.push(lists);
            }
        });

        this.setState({
            searchlist: list
        });
    }

    handleUserSearchChange = (e) => {
        this.setState({
            searchUser: e.target.value
        });
    }

    handleSubmitSearch = (e) => {
        e.preventDefault();
        axios.get(`https://api.jikan.moe/v3/user/${this.state.searchUser}/animelist`)
        .then(resp => {
            this.setState({
                animelist: resp.data.anime,
                searchlist: resp.data.anime,
                userSearched: this.state.searchUser
            });
        })
        .catch(console.error);
    }

    render(){
        let headerText = `This is ${this.state.userSearched}'s anime list`

        return (
            <div className="right-column">
                <Container>
                    <AppHeader headertitle={headerText} />
                    <div class="search-container">
                        <form onSubmit={this.handleSubmitSearch}>
                            <input placeholder="Enter Your Username" className="search-input" onKeyUp={this.handleUserSearchChange} />
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                    <hr/>
                    <div class="search-container">
                        <input placeholder="Search Anime" className="search-input" onKeyUp={this.handleSearchInputChange} />
                        <select onChange={this.handleSearchStatusChange}>
                            <option value='0'>All status</option>
                            <option value='1'>Watching</option>
                            <option value='2'>Completed</option>
                            <option value='3'>Dropped</option>
                        </select>
                    </div>
                    <hr/>
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