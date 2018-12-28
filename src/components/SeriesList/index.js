import React from 'react';
import './index.css'
import {Link} from 'react-router-dom';

/*//key will be in the seriesListItem since
//its the one that will be iterating*/

/*Link//will create a dynamic link to the router with
//id that i want*/

//refactoring serieslistitem in different function
const SeriesListItem = ({series}) =>(

      <li>
      <Link to={`/series/${series.show.id}`}>
        {series.show.name}
        </Link>
      </li>
)


const SeriesList = (props) => {
  return (
    <div>
    <ul className="series-list">
    {props.list.map(series => (
      // unique key iteratror {Link]needed
      //normally we use an id, otherwise if we dont have one, we can use an index.
      // help react to indentigy which items have change/removed-
      <SeriesListItem  key={series.show.id} series={series}/>
    ))}
    </ul>
    </div>
  )
}

export default SeriesList;
