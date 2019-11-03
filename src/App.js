import React, { Component } from 'react'


class App extends Component {
    checkUploadResult = (resultEvent) => {
    if(resultEvent.event === 'success'){
      console.log(this.props.currentUser.id);
      this.props.postPhoto({
        user_id: this.props.currentUser.id,
        caption: '',
        url: resultEvent.info.secure_url
      })
      .then(this.props.history.push(`/profile`))
    }
  }

  uploadWidget = () => {
    window.cloudinary.openUploadWidget({
      cloudName: "",
      uploadPreset: ""},
      (error, result) => { console.log(result)
    })
  }
   
  render() {
    return (
       <div>
        <h1>Hello World</h1>
        <button onClick={this.uploadWidget}>Upload Photo</button>
      </div>
    )
  }
}

export default App;