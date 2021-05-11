import React, { useState } from "react";
import imgHolder from "../assets/imageHolder.png";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import styles from "../styles/App.module.scss";

const App = () => {
  const [profileImage, setProfileImage] = useState(imgHolder);

  const imageHandler = (e) => {
    const readyStates = {
      EMPTY: 0,
      LOADING: 1,
      DONE: 2,
    };
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === readyStates.DONE) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Add your image</h1>
        <div className={styles.imgHolder}>
          <img src={profileImage} className={styles.img} alt="img" />
        </div>
        <input
          type="file"
          name="image-upload"
          id={styles.input}
          accept="image/*"
          onChange={imageHandler}
        />
        <div className={styles.label}>
          <label htmlFor={styles.input} className={styles.imageUpload}>
            <AddPhotoAlternateIcon /> Choose your photo
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
