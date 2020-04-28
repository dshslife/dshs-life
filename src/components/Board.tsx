//import CKEditor from '@ckeditor/ckeditor5-react';
import React, { useState, Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { FilePond, File, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css'
import {TextField} from '@material-ui/core';
import {Button} from 'react-bootstrap';
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import Views from './LostAndFound';
import DefaultView from './DefaultView';
import styled from '@emotion/styled';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function BoardJSX() {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<Array<File>>([]);;
  const handleSubmit = () => {
    console.log(content);
    console.log(files);
  }
  
  const handleChange = ( evt : any) => {
    setContent(
      evt.editor.getData()
    )
  }
  return (
    <BoardParent>
      <Card>
        <MainText>
          공지사항
        </MainText>
        <TextField
          fullWidth={true}
          label="제목"
          id="standard-basic"  />
        <DSButton>
          <Button variant="success" onClick={handleSubmit}>업로드하기</Button>
        </DSButton>
      </Card>
    <CKEditor
      data={content}
      onChange={handleChange}
      />
      <FilePond
      
        files={files}
        allowMultiple={true}
        onupdatefiles={(files: File[]) => setFiles(files)}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
    </BoardParent>
  )
}
const BoardParent = styled.div`
  width:100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  margin-top: 5px;
  background: white;
`;

const DSButton = styled.div`
  margin-top: 20px;
`;

const MainText = styled.text`
  font-size: 25px;

`;
export default function BoardViews() {
  return DefaultView(BoardJSX);
}