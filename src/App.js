import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="flourida">
        <div className="container-fluid section-one">
          <div className="panel-body">
            <div className="col-md-12">
              <div className="col-md-6 text-left">
                <h3 className="cost-title">Compare Medical Costs</h3>
              </div>
              <div className="col-md-6">
                <div className="form-row">
                  <div className="form-group col-md-8">
                    <label ><strong><i className="fa fa-car"></i> Distance</strong></label>
                    <input type="email" className="form-control" id="inputEmail4"
                      placeholder="with in 20 miles of" />
                  </div>
                  <div className="form-group col-md-4">
                    <label><strong><i className="fa fa-map-marker" aria-hidden="true"></i> Enter Zip</strong></label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="32323" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid section-two">
          <div className="row">
            <div className="col-md-8">
              <div className="description">
                <p>we have over a 1000 procedures available from which to select.
                   In most cases this will represent the national average cost. In some cases exact cost will be available, as shown by $
                   Additionally some procedures involves multiple steps,indicated by (additional help seen in legend)
                    </p>
              </div>
              <div className="col-md-12 padding-none">
                <div className="form-row">
                  <div className="form-group col-md-4 pl-none">
                    <label ><strong><i className="fa fa-user" aria-hidden="true"></i> Select Member</strong></label>
                    <input type="email" className="form-control"
                      placeholder="Terry Sheppard" />
                  </div>
                  <div className="form-group col-md-6 pr-none">
                    <label><strong>Search healthcare service within below categories</strong></label>
                    <input type="password" className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-2 search-button">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 padding-none"> 
                <div className="checkbox">
                  <label><input type="checkbox" value="" />I have procedure and diagnosis code <i className="fa fa-question-circle text-primary" aria-hidden="true"></i></label>
                </div>
              </div>
              <div className="col-md-12 padding-none">
                <div className="panel-group" id="accordionGroupOpen" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordionGroupOpen"
                          href="#collapseOpenOne"
                          aria-expanded="true" aria-controls="collapseOpenOne">
                          Imaging - MRI, Scan or X-Ray
                                </a>
                      </h4>
                    </div>
                    <div id="collapseOpenOne" className="panel-collapse collapse in " role="tabpanel"
                      aria-labelledby="headingOne">
                      <div className="panel-body text-justify">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo.
                        Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                            </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse"
                          data-parent="#accordionGroupOpen"
                          href="#collapseOpenTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Surgery(Impatient/outpatient)
                                </a>
                      </h4>
                    </div>
                    <div id="collapseOpenTwo" className="panel-collapse collapse" role="tabpanel"
                      aria-labelledby="headingTwo">
                      <div className="panel-body text-justify">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo.
                        Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                            </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse"
                          data-parent="#accordionGroupOpen"
                          href="#collapseOpenThree" aria-expanded="false" aria-controls="collapseThree">
                          Behavioral Health
                                </a>
                      </h4>
                    </div>
                    <div id="collapseOpenThree" className="panel-collapse collapse" role="tabpanel"
                      aria-labelledby="headingThree">
                      <div className="panel-body text-justify">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo.
                        Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                            </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse"
                          data-parent="#accordionGroupOpen"
                          href="#collapseOpenFour" aria-expanded="false" aria-controls="collapseFour">
                          Immunization
                                </a>
                      </h4>
                    </div>
                    <div id="collapseOpenFour" className="panel-collapse collapse" role="tabpanel"
                      aria-labelledby="headingFour">
                      <div className="panel-body text-justify">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                        squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird
                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                        helvetica, craft
                        beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo.
                        Leggings occaecat craft beer farm-to-table,
                        raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                            </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <div className="col-md-4">
              <div className="panel-body information">
                <h4><i className="fa fa-flag" aria-hidden="true"></i> Important information about your search results</h4>
              </div>
              <div className="panel-body cost-desc default-border">
              <div className="btn-group">
              <button type="button" className="btn btn-success offset-bottom-10 custom-buttons">Exact</button> 
                <button className="btn btn-default rounded-button offset-bottom-10">$</button>
              </div>
                
                <p>Majority will represent the national average, your exact cost(if available) is shown with a ($icon) </p>
              </div>
              <div className="panel-body default-border">
              <div className="btn-group">
              <button type="button" className="btn btn-secondary offset-bottom-10">Steps</button> 
                <button className="btn btn-default rounded-button offset-bottom-10"><i className="fa fa-bars" aria-hidden="true"></i></button>
              </div>
                <p>It is estimated minimum to maximum cost range of selected health care service</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
