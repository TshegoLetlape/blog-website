import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//CSS

const styles = {
  body: {
    marginTop: "20px",
  },
  contentItem: {
    padding: "30px 0",
    backgroundColor: "#FFFFFF",
  },
  contentItemGrey: {
    backgroundColor: "#F0F0F0",
    padding: "50px 0",
    height: "100%",
  },
  contentItemH2: {
    fontWeight: "700",
    fontSize: "35px",
    lineHeight: "45px",
    textTransform: "uppercase",
    margin: "20px 0",
  },
  contentItemH3: {
    fontWeight: "400",
    fontSize: "20px",
    color: "#555555",
    margin: "10px 0 15px",
    padding: "0",
  },
  contentHeadline: {
    height: "1px",
    textAlign: "center",
    margin: "20px 0 70px",
  },
  contentHeadlineH2: {
    backgroundColor: "#FFFFFF",
    display: "inline-block",
    margin: "-20px auto 0",
    padding: "0 20px",
  },
  greyContentHeadlineH2: {
    backgroundColor: "#F0F0F0",
  },
  contentHeadlineH3: {
    fontSize: "14px",
    color: "#AAAAAA",
    display: "block",
  },
  blogTimelineH2: {
    margin: "0 0 15px",
  },
  timeline: {
    borderLeft: "3px solid #BBBBBB",
    marginLeft: "110px",
    paddingLeft: "25px",
  },
  blogPost: {
    backgroundColor: "#FFFFFF",
    padding: "10px 25px",
    marginBottom: "60px",
  },
  dateXS: {
    display: "none",
  },
  blogPostP: {
    fontSize: "14px",
    lineHeight: "23px",
    textAlign: "justify",
  },
  blogPostImg: {
    maxWidth: "200px",
  },
  blogPostImgPullRight: {
    marginLeft: "15px",
  },
  blogPostImgPullLeft: {
    marginRight: "15px",
  },
  blogPostBlogInfo: {
    position: "absolute",
    left: "0",
    marginTop: "-10px",
    width: "100px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 2px 1px rgba(0,0,0,0.2)",
  },
  blogPostBlogInfoAfter: {
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "-37px",
    top: "21px",
    content: '""',
    textAlign: "center",
    borderRadius: "50%",
    border: "5px solid #F0F0F0",
  },
  blogPostBlogInfoDate: {
    backgroundColor: "#FFFFFF",
    fontSize: "16px",
  },
  blogPostBlogInfoDateDiv: {
    float: "left",
    padding: "8px 0 0 12px",
    fontWeight: "600",
  },
  blogPostBlogInfoDateDivNumber: {
    padding: "4px 10px",
    color: "#FFFFFF",
    fontSize: "20px",
  },
  box: {
    backgroundColor: "#FFFFFF",
    padding: "10px 20px",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  boxH3: {
    margin: "30px 0 5px",
    fontWeight: "bold",
  },
  boxUl: {
    margin: "0",
  },
  boxUlLi: {
    fontSize: "13px",
    borderBottom: "1px dashed #DDDDDD",
    padding: "10px 0",
    fontWeight: "600",
  },
  boxUlLiLastChild: {
    borderBottom: "0",
  },
  boxUlLiI: {
    fontSize: "18px",
    marginRight: "20px",
  },
  boxCategoriesUlLiI: {
    color: "#BBBBBB",
    position: "relative",
    top: "2px",
    width: "20px",
  },
  postsUlLiA: {
    fontSize: "14px",
    lineHeight: "23px",
  },
  postsUlLiAHover: {
    color: "#333333",
  },
  postsUlLiDiv: {
    fontSize: "13px",
    color: "#999999",
    fontWeight: "bold",
    textAlign: "right",
    marginTop: "5px",
  },
  boxPostsUlLiI: {
    color: "#333333",
    fontSize: "14px",
    marginRight: "10px",
  },
  boxTagsUlBlogTagsLi: {
    border: "0",
  },
  blogTagsLi: {
    padding: "7px 0",
  },
  divUlBlogTagsLiI: {
    color: "#FFFFFF",
    position: "relative",
    top: "1px",
    fontSize: "14px",
  },
  "@media (max-width: 1024px)": {
    ".blog-post p, .blog p, #comments .media p": {
      textAlign: "left",
    },
  },
  "@media (min-width: 768px) and (max-width: 991px)": {
    ".overlay-wrapper .overlay a": {
      fontSize: "15px",
      width: "40px",
      height: "40px",
      paddingTop: "9px",
    },
    "#reference": {
      minHeight: "430px",
    },
    "#blog-timeline h2, #blog-item h2": {
      fontSize: "30px",
    },
    ".blog-post p img": {
      maxWidth: "100%",
      marginBottom: "10px",
    },
  },
  "@media (max-width: 767px)": {
    ".blog-post p img, .blog p img": {
      maxWidth: "100%",
      marginBottom: "10px",
    },
  },
  "#blog-timeline .sidebar, #blog-item .sidebar": {
    marginTop: "40px",
  },
};

const BlogPost = ({
  avatarSrc,
  dateNumber,
  dateMonth,
  title,
  content,
  tags,
}) => (
  <div className="blog-post">
    <div className="blog-info">
      <img src={avatarSrc} className="img-fluid" alt="" />
      <div className="date">
        <div className="number">{dateNumber}</div>
        <div>{dateMonth}</div>
      </div>
    </div>
    <h3>
      <a href="#blogitem.html">{title}</a>
    </h3>
    <p>
      <img
        className="img-fluid pull-right"
        src="images/SA-dresses.png"
        alt=""
      />
      {content}
    </p>
    <ul className="blog-tags list-unstyled list-inline">
      {tags.map((tag, index) => (
        <li key={index}>
          <a href="#">
            <i className="fa fa-tag"></i>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const BlogTimeline = () => {
  const blogPosts = [
    {
      image: "https://bootdey.com/img/Content/avatar/avatar6.png",
      day: "18",
      month: "Dec",
      title: "Trendy Shweshwe Dresses",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/SA-dresses.png",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar2.png",
      day: "09",
      month: "Dec",
      title: "Botswana's most Loved Meat",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/seswaa.jpg",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar3.png",
      day: "25",
      month: "Nov",
      title: "Traditional Food Preparation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/3foot.jpg",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
    {
      image: "https://bootdey.com/img/Content/avatar/avatar4.png",
      day: "19",
      month: "Nov",
      title: "Cultural Dance Atire",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis lacus ac semper viverra. Etiam consequat odio sollicitudin metus condimentum, quis hendrerit erat adipiscing...",
      blogImage: "images/dance-culture.jpg.",
      tags: ["book", "music", "nature", "read", "songs", "sunshine"],
      link: "#blogitem.html",
    },
  ];

  return (
    <section
      style={styles.body}
      className="content-item grey"
      id="blog-timeline"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h2>NGWAO</h2>
            <div className="timeline">
              {blogPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))}
            </div>
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
                      <i className="fa fa-music"></i>Food
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i className="fa fa-hashtag"></i>Uncategorized
                    </a>
                  </li>
                </ul>
              </div>
              <h3>Recent Posts</h3>
              <div className="box posts">
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Traditional Medicine</a>
                    <div>02/11/2023</div>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Royal Bafokeng Cheiftency</a>
                    <div>10/11/2023</div>
                  </li>
                  <li>
                    <i className="fa fa-chevron-right"></i>
                    <a href="#">Traditional Wedding Dresse</a>
                    <div>12/11/2023</div>
                  </li>
                </ul>
              </div>
              <h3>Tags</h3>
              <div className="box tags">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTimeline;
