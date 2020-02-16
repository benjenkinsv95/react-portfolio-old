import React, {Component} from 'react';
import ItemGrid from './ItemGrid';
import Sectiontitle from '../../component/Banner/Sectiontitle';

class portfolio extends Component {
    render() {
      var {pClass}= this.props;
      return(
        <section className={`portfolio_area ${pClass}`} id="portfolio">
            <div className="container">
                <Sectiontitle Title="My Portfolio" TitleP="What I make."/>
                <ItemGrid/>
            </div>
        </section>
      )
    }
  }

  export default portfolio;
