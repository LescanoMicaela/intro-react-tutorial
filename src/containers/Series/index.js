import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
//we have the logic in this component
//we separate logic and presentional components.
class Series extends Component{
  state = {
    series: [],
    //INPUT VALUE
    seriesName:'',
    // we will know whenever we are fetching something from API
    isFetching: false
  }
  // componentDidMount(){
    // const series = ["Vikings","Games of Thrones"];
    // setTimeout(() =>{
    //   // if it is the same name we can change series : series to series
    //   this.setState({series});
    // },2000);

    /// the app component doesnt have to know tv series array and launch the call everytime
    // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    // we parse the response
    // .then(response => response.json())
    // we set the json to the state.
    // .then(json => this.setState({series : json}))
  // }
  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching : true});
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response => response.json())
    // we set the json to the state.
    .then(json => this.setState({series : json, isFetching: false}))
    console.log(e)
    console.log(e.target.value)
  }
  render(){
    const{series,seriesName,isFetching} = this.state;

    return(
      // <div> The length of series array - {this.state.series.length}
      <div>
      <div>
      <input value={seriesName} type="text" onChange={this.onSeriesInputChange} />
      </div>

      {/*this is conditional rendering*/}
      {!isFetching && series.length === 0 && seriesName.trim() === ''
    &&
    <p>Please enter series name into the input</p>
    }
    {
      !isFetching && series.length === 0 && seriesName.trim() !==''
      &&
      <p>No Tv series found with this name</p>
    }
    {/*fetching is loading*/}

    {
      isFetching && <Loader />
    }
    {
      !isFetching &&
      <SeriesList list={this.state.series} />

    }
      </div>
    )
  }
}

export default Series;
