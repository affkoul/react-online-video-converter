import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { Container, Divider, Grid } from "@material-ui/core";
import VideoUpload from "./components/VideoUpload";
import ConvertOptions from "./components/ConvertOptions";
import ConvertButton from "./components/ConvertButton";
import Footer from "./components/Footer";
import API from "./utils/API";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadbutton: false,
      uploadedfile: null,
      formatvalue: "",
      convertbutton: true,
      convertbuttontext: "Convert Video",
    };
  }

  convertHandler = (e) => {
    e.preventDefault();
    console.log("convert button clicked!");
    this.setState({ convertbuttontext: "Converting...", uploadbutton: false });
    const file = this.state.uploadedfile;
    const data = new FormData();
    data.append("file", file);
    data.append("data", this.state.formatvalue);
    API.convertFile(data)
      .then((res) => {
        if (typeof window.navigator.msSaveBlob === "function") {
          // If it is IE that support download blob directly.
          window.navigator.msSaveBlob(res.data);
        } else {
          const blob = res.data; //video returned as blob object, defined in utils/API.js
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "output." + this.state.formatvalue;
          document.body.appendChild(link);
          link.click();
          this.setState({
            uploadedfile: null,
            convertbuttontext: "Convert Video",
            formatvalue: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };

  uploadHandler = (event) => {
    event.preventDefault();
    if (event.target.files[0] === undefined) {
      return null;
    } else if (event.target.files[0].size >= 157286400) {
      alert("file size cannot exceed 150mb");
    } else {
      let file = event.target.files[0];
      this.setState({ uploadedfile: file, uploadbutton: true });
    }
  };

  deleteUploadHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    this.setState({ uploadedfile: null, uploadbutton: false });
  };

  changeHandler = (event) => {
    const value = event.target.value;
    this.setState({
      formatvalue: value,
    });
  };
  render() {
    const style = {
      divider: {
        margin: 20,
        padding: 5,
      },
    };
    return (
      <div className="App">
        <AppBar />
        <Container align="center">
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
        </Container>
        <Container align="center" maxWidth="lg">
          <VideoUpload
            uploadbutton={this.state.uploadbutton}
            uploadedfile={this.state.uploadedfile}
            uploadHandler={this.uploadHandler}
            deleteUploadHandler={this.deleteUploadHandler}
          />
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
          <ConvertOptions
            formatvalue={this.state.formatvalue}
            changeHandler={this.changeHandler}
          />
          <Grid item xs={6}>
            <Divider style={style.divider} variant="middle" />
          </Grid>
          <ConvertButton
            convert={this.convertHandler}
            formatvalue={this.state.formatvalue}
            uploadbtn={this.state.uploadbutton}
            convertbtn={this.state.convertbutton}
            converttext={this.state.convertbuttontext}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
