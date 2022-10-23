import React from 'react';
import {saveAs} from 'file-saver';
import Image from '../../Assets/resume.png';
import { FaDownload } from "@react-icons/all-files/fa/FaDownload";
import classes from './Resume.module.css';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Resume = () => {
  let path = undefined;

  const savePDF = async () => {
    
    const storage = getStorage();
    await getDownloadURL(ref(storage, 'Christian Prants_CV Dev_2022.pdf'))
    .then((url) => {
      path = url;
    });

    saveAs(
      path,
      "Christian Prants_CV.pdf"
    );
  };

  path = '';

  return (
    <div className={classes.resume}>
        <button type="button" onClick={savePDF}> <FaDownload className={classes.icon}/> Download .PDF</button> 
        <img src={Image} alt="resume"/>
        <button type="button" onClick={savePDF}> <FaDownload className={classes.icon}/> Download .PDF</button> 
    </div>
  )
}

export default Resume