import React, { PropTypes } from 'react';
import { truncateMiddle } from '../../lib/textHelper';
import { Loader } from '../UI';
import MediaProxy, { createMediaProxy } from '../../valueObjects/MediaProxy';

const MAX_DISPLAY_LENGTH = 50;

export default class ImageControl extends React.Component {
  state = {
    processing: false,
  };

  handleFileInputRef = (el) => {
    this._fileInput = el;
  };

  handleClick = (e) => {
    this._fileInput.click();
  };

  handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  handleChange = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const fileList = e.dataTransfer ? e.dataTransfer.files : e.target.files;
    const files = [...fileList];
    const imageType = /^image\//;

    // Iterate through the list of files and return the first image on the list
    const file = files.find((currentFile) => {
      if (imageType.test(currentFile.type)) {
        return currentFile;
      }
    });

    this.props.onRemoveMedia(this.props.value);
    if (file) {
      this.setState({ processing: true });
      createMediaProxy(file.name, file)
      .then((mediaProxy) => {
        this.setState({ processing: false });
        this.props.onAddMedia(mediaProxy);
        this.props.onChange(mediaProxy.public_path);
      });
    } else {
      this.props.onChange(null);
    }
  };

  renderImageName = () => {
    if (!this.props.value) return null;
    if (this.value instanceof MediaProxy) {
      return truncateMiddle(this.props.value.path, MAX_DISPLAY_LENGTH);
    } else {
      return truncateMiddle(this.props.value, MAX_DISPLAY_LENGTH);
    }
  };

  render() {
    const { processing } = this.state;
    const imageName = this.renderImageName();
    if (processing) {
      return (
        <div style={styles.imageUpload}>
          <span style={styles.message}>
            <Loader active />
          </span>
        </div>
      );
    }
    return (
      <div
        style={styles.imageUpload}
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDrop={this.handleChange}
      >
        <span style={styles.message} onClick={this.handleClick}>
          {imageName ? imageName : 'Tip: Click here to upload an image from your file browser, or drag an image directly into this box from your desktop'}
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleChange}
          style={styles.input}
          ref={this.handleFileInputRef}
        />
      </div>
    );
  }
}

const styles = {
  input: {
    display: 'none',
  },
  message: {
    padding: '20px',
    display: 'block',
    fontSize: '12px',
  },
  imageUpload: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#999',
    border: '1px dashed #eee',
    cursor: 'pointer',
  },
};

ImageControl.propTypes = {
  onAddMedia: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemoveMedia: PropTypes.func.isRequired,
  value: PropTypes.node,
};
