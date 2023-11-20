import React from "react";
import "./Blog1.css";

const BlogItem = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />

      <section className="content-item grey" id="blog-item">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 blog">
              <h2>Lorem ipsum dolor sit amet</h2>
              <ul className="blog-detail list-unstyled list-inline">
                <li>
                  <i className="fa fa-calendar"></i>27/02/2014
                </li>
                <li>
                  <i className="fa fa-clock-o"></i>19:41
                </li>
                <li>
                  <i className="fa fa-user"></i>John Doe
                </li>
                <li>
                  <i className="fa fa-comments"></i>124 Comments
                </li>
              </ul>
              <p>
                <img
                  className="img-responsive pull-left"
                  src="https://www.bootdey.com/image/200x200/FFB6C1/000000"
                  alt="Lorem ipsum dolor sit amet"
                />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis lacus ac semper viverra. Etiam consequat odio
                sollicitudin metus condimentum, quis hendrerit erat adipiscing.
                Cras non turpis ut eros varius laoreet a ut felis. Aliquam
                sodales, purus pulvinar tincidunt congue, elit mauris sodales
                nisl, consequat iaculis urna enim in lectus. Proin at ornare
                lacus. Curabitur sodales imperdiet ante, eget fermentum nulla
                consequat id. Vestibulum quis tellus ac lectus luctus varius nec
                sit amet nunc. Aliquam elit orci, semper vitae aliquet vel,
                ultrices nec sem. Morbi lorem ligula, tempus eu ultrices sit
                amet, varius id quam. Donec vestibulum arcu et augue porta, at
                mattis neque facilisis. Donec vulputate eu risus ut volutpat.
                Praesent vel rhoncus velit, quis vestibulum dui. Phasellus
                sodales sapien ligula, quis consequat diam tristique id. Donec
                vel rhoncus sem, id elementum quam. Aliquam erat volutpat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                venenatis lacus ac semper viverra. Etiam consequat odio
                sollicitudin metus condimentum, <a href="#">quis hendrerit</a>{" "}
                erat adipiscing. Cras non turpis ut eros varius laoreet a ut
                felis. Aliquam sodales, purus pulvinar tincidunt congue, elit
                mauris sodales nisl, consequat iaculis urna enim in lectus.
                Proin at ornare lacus. Curabitur sodales imperdiet ante, eget
                fermentum nulla consequat id. Vestibulum quis tellus ac lectus
                luctus varius nec sit amet nunc. Aliquam elit orci, semper vitae
                aliquet vel, ultrices nec sem.
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>In venenatis lacus ac semper viverra</li>
                <li>Etiam consequat odio sollicitudin metus condimentum</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <b>
                  consectetur adipiscing elit. In venenatis lacus ac semper
                  viverra
                </b>
                . Etiam consequat odio sollicitudin metus condimentum,{" "}
                <i>quis hendrerit erat adipiscing</i>. Cras non turpis ut eros
                varius laoreet a ut felis. Aliquam sodales, purus pulvinar
                tincidunt congue, elit mauris sodales nisl, consequat iaculis
                urna enim in lectus. Proin at ornare lacus. Curabitur sodales
                imperdiet ante, eget fermentum nulla consequat id. Vestibulum
                quis tellus ac lectus luctus varius nec sit amet nunc. Aliquam
                elit orci, semper vitae aliquet vel, ultrices nec sem.
              </p>
              <ul className="blog-tags list-unstyled list-inline">
                <li>
                  <a href="#">
                    <i className="fa fa-tag"></i>book
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-tag"></i>music
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-tag"></i>read
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-tag"></i>songs
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-4">
              <div className="sidebar">
                <h3>Categories</h3>
                <div className="box categories">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fa fa-female"></i>Fashion
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-paint-brush"></i>Food
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-music"></i>Music
                      </a>
                    </li>
                  </ul>
                </div>
                <h3>Recent Posts</h3>
                <div className="box posts">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-chevron-right"></i>
                      <a href="#">Introducing WordPress 4.0</a>
                    </li>
                    <li>
                      <i className="fa fa-chevron-right"></i>
                      <a href="#">Responsive Design</a>
                    </li>
                    <li>
                      <i className="fa fa-chevron-right"></i>
                      <a href="#">Mobile First Strategy</a>
                    </li>
                    <li>
                      <i className="fa fa-chevron-right"></i>
                      <a href="#">Latest Web Trends</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogItem;
