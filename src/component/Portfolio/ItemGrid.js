import React, {Component} from 'react';
import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class ItemGrid extends Component {

    state = {
        activeItem: '*',
    }

    componentDidMount() {
        var imgLoad = new ImagesLoaded('.grid');
    
        imgLoad.on('progress', function(instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }); 
        
    }
    onFilterChange = (newFilter) => {
        
        this.setState({activeItem: newFilter});
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
            itemSelector: '.grid-item',
            layoutMode: "masonry"
            });
        }
    
    // this.iso.arrange({ filter: newFilter });
        
      if(newFilter === '*') {
        this.iso.arrange({ filter: `*` });
      } else {
        this.iso.arrange({ filter: `.${newFilter}` });
      }
    }

    onActive = v => v === this.state.activeItem ? 'active' : '';
    render() {
        return(
            <div>
            <ul className="list_style portfolio_menu text-center">
                <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>
                <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}>Web Development</li>
                <li className={`${this.onActive(`extension`)}`} data-wow-delay="0.6s" data-filter="extension" onClick={()=> {this.onFilterChange("extension")}}>Chrome Extension</li>
                <li className={`${this.onActive(`other`)}`} data-wow-delay="0.8s" data-filter="other" onClick={()=> {this.onFilterChange("other")}}>Other</li>
            </ul>	

            <div className="grid row">
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/kanban-small.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">React Kanban Board</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/react-kanban-board'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                    <a href="https://benjenkinsv95.github.io/react-kanban-board/"><i className="icon-desktop"></i></a>
                                </div>
                            </div>
                        </div>						
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item web extension">
                    <div className="portfolio hover-style">
                    <img src={require('../../image/portfolio/need-that-small.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Do You Really Need That?</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/do-you-really-need-that'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>						
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item other">
                    <div className="portfolio hover-style">
                    <img src={require('../../image/portfolio/barliman-large.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Barliman iOS</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/Barliman-iOS'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item other">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/zelda-large.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Legend of 50 RPG</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/legend-of-50-rpg'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item web extension">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/sentimentsion-small.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">Sentimentsion</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/sentimentsion'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item other">
                    <div className="portfolio hover-style">
                        <img src={require('../../image/portfolio/cs-history-small.gif')} alt=""/>
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">CS History Backgrounds</h6>
                                <div className="icons">
                                    <a  href='https://github.com/benjenkinsv95/cs-history'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
  }

  export default ItemGrid;
