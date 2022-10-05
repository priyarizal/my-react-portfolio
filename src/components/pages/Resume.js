import React from 'react';
import ResumePdf from '../../assets/images/Priyasfullstackresume.png'

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <iframe id="resume" title="resume" src={ResumePdf}></iframe>
    </>
  );
}

