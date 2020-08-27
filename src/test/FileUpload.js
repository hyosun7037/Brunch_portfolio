import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="이미지" />;
    } else {
      $imagePreview = <div className="previewText">이미지선택</div>;
    }
    return (
      <div>
        <div className="previewComponent">
          <form onSubmit={(e) => this._handleSubmit(e)}>
            <input
              className="fileInput"
              type="file"
              onChange={(e) => this._handleImageChange(e)}
            />
            {/* <button
              className="submitButton"
              type="submit"
              onClick={(e) => this._handleSubmit(e)}
            >
              Upload Image
            </button> */}
          </form>
          <div className="imgPreview">{$imagePreview}</div>
        </div>
      </div>
    );
  }
}

export default FileUpload;
