import React from 'react';
import './index.css'


//refactoring serieslistitem in different function
const SeriesListItem = ({series}) =>(
    //key will be in the seriesListItem since
    //its the one that will be iterating
      <li>
        {series.show.name}
      </li>
)


const SeriesList = (props) => {
  return (
    <div>
    <ul className="series-list">
    {props.list.map(series => (
      // unique key iteratror needed
      //normally we use an id, otherwise if we dont have one, we can use an index.
      // help react to indentigy which items have change/removed-
      <SeriesListItem  key={series.show.id} series={series}/>
    ))}
    </ul>
    </div>
  )
}

export default SeriesList;
