import { FaGlobe, FaSearch, FaThumbtack } from "react-icons/fa"
import { Link } from "react-router-dom"

const SearchSection = () => {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ftco-search d-flex justify-content-center">
              <div className="row">
                <div className="col-md-12 nav-link-wrap">
                  <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <Link className="nav-link active me-md-1" id="v-pills-1-tab" data-bs-toggle="pill"
                      to="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find your Dream
                    </Link>

                    {/* <a className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" href="#v-pills-2"
                                    role="tab" aria-controls="v-pills-2" aria-selected="false">Hotel</a> */}

                  </div>
                </div>
                <div className="col-md-12 tab-wrap">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                      aria-labelledby="v-pills-nextgen-tab">
                      <form action="#" className="search-property-1">
                        <div className="row no-gutters">
                          <div className="col-md d-flex">
                            <div className="form-group p-4 border-0">
                              <label htmlFor="#">Destination</label>
                              <div className="form-field mt-2">
                                <div className="icon"><FaSearch aria-hidden="true" /></div>
                                <input type="text" className="form-control" placeholder="Search place" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">Country</label>
                              <div className="form-field mt-2">
                                <div className="icon"><FaGlobe aria-hidden="true" /></div>
                                <input type="text" className="form-control "
                                  placeholder="Country" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group p-4">
                              <label htmlFor="#">State</label>
                              <div className="form-field mt-2">
                                <div className="icon"><FaThumbtack aria-hidden="true" /></div>
                                <input type="text" className="form-control" placeholder="State" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md d-flex">
                            <div className="form-group d-flex w-100 border-0">
                              <div className="form-field w-100 align-items-center d-flex">
                                <input type="submit" value="Search" className="align-self-stretch form-control btn btn-primary" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* < div className="tab-pane fade" id="v-pills-2" role="tabpanel"
                                    aria-labelledby="v-pills-performance-tab">
                  <form action="#" className="search-property-1">
                    <div className="row no-gutters">
                      <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                          <label htmlFor="#">Destination</label>
                          <div className="form-field">
                            <div className="icon"><span className="fa fa-search"></span>
                            </div>
                            <input type="text" className="form-control"
                              placeholder="Search place">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg d-flex">
                        <div className="form-group p-4">
                          <label htmlFor="#">Check-in date</label>
                          <div className="form-field">
                            <div className="icon"><span className="fa fa-calendar"></span>
                            </div>
                            <input type="text" className="form-control checkin_date"
                              placeholder="Check In Date">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg d-flex">
                        <div className="form-group p-4">
                          <label htmlFor="#">Check-out date</label>
                          <div className="form-field">
                            <div className="icon"><span className="fa fa-calendar"></span>
                            </div>
                            <input type="text" className="form-control checkout_date"
                              placeholder="Check Out Date">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg d-flex">
                        <div className="form-group p-4">
                          <label htmlFor="#">Price Limit</label>
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span
                                className="fa fa-chevron-down"></span></div>
                              <select name="" id=""
                                className="form-control">
                                <option value="">$100</option>
                                <option value="">$10,000</option>
                                <option value="">$50,000</option>
                                <option value="">$100,000</option>
                                <option value="">$200,000</option>
                                <option value="">$300,000</option>
                                <option value="">$400,000</option>
                                <option value="">$500,000</option>
                                <option value="">$600,000</option>
                                <option value="">$700,000</option>
                                <option value="">$800,000</option>
                                <option value="">$900,000</option>
                                <option value="">$1,000,000</option>
                                <option value="">$2,000,000</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg d-flex">
                        <div className="form-group d-flex w-100 border-0">
                          <div className="form-field w-100 align-items-center d-flex">
                            <input type="submit" value="Search"
                              className="align-self-stretch form-control btn btn-primary p-0"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection