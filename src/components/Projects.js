import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      this.props.resumeProjects[0].title = "Recipe Book";
      this.props.resumeProjects[0].description =
        "At this project, we built a web app using Angular framework to create new recipies, edit existed recipe and delete recipies. On the other hand, we created shopping list dashboard to add shopping items and edit them. You must be authenticated to use and implement our web app features. So, Kindly register into our website and have fun! ";
      this.props.resumeProjects[1].description =
        "At this project, we built a web app using React framework to read, publish and update news over the word!";
      this.props.resumeProjects[2].description =
        "At this project, we built a web app using React framework to plan for your event by selecting items as a client, also you can signup as a supplier for items for many events!";
      this.props.resumeProjects[0].images[0] =
        "https://personalizedfavors.com/media/catalog/product/cache/62b85b94609a2e84b76d7db7c3afa306/e/n/engraved-bamboo-recipe-book-1_1.jpg";
      this.props.resumeProjects[0].images[1] =
        "https://i.imgur.com/tRDNhNX.png";
      this.props.resumeProjects[0].startDate = "2023";
      this.props.resumeProjects[1].title = "News-Box";
      this.props.resumeProjects[1].images[0] =
        "https://avatars.githubusercontent.com/u/111048025?s=400&u=28c70ae3ef610f4e6f10f76f962aaf7d6d8c9ab4&v=4";
      this.props.resumeProjects[1].images[1] =
        "https://pasteboard.co/BY04e4bLaPeK.png";
      this.props.resumeProjects[2].title = "Evently";
      this.props.resumeProjects[2].images[0] =
        "https://th.bing.com/th/id/OIP.VTAvDinDWNtorQwoakqHLQAAAA?pid=ImgDet&rs=1";
      this.props.resumeProjects[2].images[1] =
        "https://www.suitcasediaries.in/wp-content/uploads/2020/08/event-planning-skills.png";

      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
