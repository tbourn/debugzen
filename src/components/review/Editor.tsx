import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/material-darker.css';
import React, { useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useCodeState } from '../../hooks/useCodeState';
import { useResizablePane } from '../../hooks/useResizablePane';
import '../../styles/global.css';
import '../../styles/review/review.css';
import Logo from '../Logo';
import Feedback from './Feedback';

const Editor: React.FC = () => {
  const { code, setCode, feedback, isLoading, submitCode, clearCode } =
    useCodeState();
  useResizablePane();

  const editorInstanceRef = useRef<any>(null);

  const handleCodeChange = (_editor: any, _data: any, value: string) => {
    setCode(value);
  };

  const handleContainerClick = () => {
    if (editorInstanceRef.current) {
      editorInstanceRef.current.focus();
    }
  };

  return (
    <div className="container">
      <div className="leftPane" id="leftPane" onClick={handleContainerClick}>
        <div className="headerWithButtons">
          <h2 className="codeHeader">
            <Logo />
          </h2>
          <div className="buttonsContainer">
            <IconButton
              onClick={submitCode}
              aria-label="submit"
              className="iconButton"
            >
              <SendIcon />
            </IconButton>
            <IconButton
              onClick={clearCode}
              aria-label="clear"
              className="iconButton"
            >
              <ClearIcon />
            </IconButton>
          </div>
        </div>
        <div className="editorContainer">
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript',
              theme: 'material-darker',
              lineNumbers: true,
            }}
            onBeforeChange={handleCodeChange}
            editorDidMount={(editor) => {
              editorInstanceRef.current = editor;
            }}
          />
        </div>
      </div>
      <div className="resizer" id="resizer"></div>
      <Feedback feedback={feedback} isLoading={isLoading} />
    </div>
  );
};

export default Editor;
