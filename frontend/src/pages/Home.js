const Home = () => {
    return(
      <>
      <div className="hero">
        <div className="hero-body">
                <h1 className="nottitle">Welcome to <span className="styledwithcare">AgriCare</span></h1>
              </div>
              <div className="maincontent">
                <h2 className="blutitle">What we stand for</h2>
                <p className="description">Agriculture’s productivity is a significant economic factor. As a result, disease identification and classification in plants are critical in agricultural industries </p>
              </div>
              <div className="maincontent">
                <h2 className="blutitle">What our solution is</h2>
                <p className="description">Leaf Disease Detection using Image Classification is a project aimed at developing a robust system for automated identification and classification of diseases affecting plant leaves. Leveraging machine learning algorithms and image processing techniques, the project focuses on training a model to accurately classify images of leaves into healthy or diseased categories, and further classify the diseased leaves into specific disease types. The system aims to provide farmers and agricultural stakeholders with a reliable tool for early detection of leaf diseases, enabling timely interventions to prevent crop losses and optimize agricultural practices.</p>
              </div>
      </div>

      </>
      )
  };
  
  export default Home;