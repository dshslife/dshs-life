//import CKEditor from '@ckeditor/ckeditor5-react';
import React, { useState, Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { FilePond, File, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import Views from './LostAndFound';
import DefaultView from './DefaultView';

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
    <div>
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
      <button onClick={handleSubmit}/>
    </div>
  )
}

export default function BoardViews() {
  return DefaultView(BoardJSX);
}