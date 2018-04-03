import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import SaveBtn from "../SaveBtn";
import Saved from "../Saved";

// Setting the Search component's initial state
class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startyear: "",
    endyear: "",
    searchClicked: false
  };

  // This is a generic handleInputChange method, that sets the  value of name
  // whenever input fields is edited. 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = article => {
    console.log( "Headline - " + article.article.headline.main );
    console.log( "Date - " + article.article.pub_date);
    console.log( "Url - " + article.article.web_url );
    API.saveArticle(
      {
      title: article.article.headline.main,
      date: article.article.pub_date,
      url: article.article.web_url
      }
      )
      .then(res => <Saved />)
      .catch(err => console.log(article));
  };

  // When the form is submitted, use the API.getArticles method get reload the
  // articles from the database
  handleFormSubmit = event => {
    event.preventDefault();
    var query = {
      topic: this.state.topic,
      startYear: this.state.startyear,
      endYear: this.state.endyear
    };
  
    API.getArticles(query)
        .then(res => 
        // console.log( "Res - ", res )
        this.setState(
        { articles: res.data.response.docs, 
          topic: "", 
          startyear: "", 
          endyear: "", 
          searchClicked: true })
        )
      .catch(err => console.log(err));
      console.log("Articles is - ", this.state.articles);
  };

render() {
  return <Container>
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>Search</h1>

          <form>
            <Input value={this.state.topic} onChange={this.handleInputChange} name="topic" placeholder="Search Topic (required)" />
            <Input value={this.state.startyear} onChange={this.handleInputChange} name="startyear" placeholder="2017" />
            <Input value={this.state.endyear} onChange={this.handleInputChange} name="endyear" placeholder="2018" />

            <FormBtn disabled={!(this.state.topic && this.state.startyear && this.state.endyear)} onClick={this.handleFormSubmit}>
              Find Articles
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col size="md-12">
          {this.state.articles.length ? <div>
              <h2>Search Results</h2>
              <List>
                {this.state.articles.map(article => <ListItem key={article._id}>
                    <Link target="_blank" to={article.web_url}>
                      <strong>{article.headline.main}</strong>
                    </Link>
                    <br />
                    {article.pub_date.substring(0, 10)}
                    <SaveBtn onClick={() => this.saveArticle({ article })} />
                  </ListItem>)}
              </List>
            </div> : <h3>{this.state.searchClicked ? 'No Results Found' : ''} </h3>}
        </Col>
      </Row>
    </Container>
  </Container>;
}
}

export default Search;
