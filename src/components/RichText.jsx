import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichText = ({ initialContent, onChange }) => {
  const [editorState, setEditorState] = useState(() => {
    if (initialContent) {
      try {
        const contentState = convertFromRaw(JSON.parse(initialContent));
        return EditorState.createWithContent(contentState);
      } catch (error) {
        console.error("Error parsing initial content:", error);
      }
    }
    return EditorState.createEmpty();
  });

  const handleEditorChange = (state) => {
    setEditorState(state);
    if (onChange) {
      const contentState = state.getCurrentContent();
      const content = JSON.stringify(convertToRaw(contentState));
      onChange(content);
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "white",
        padding: "1rem",
        width : '80vw',
        margin : '0px auto'
      }}
    >
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker", "link", "embedded", "emoji", "remove", "history"],
          inline: { options: ["bold", "italic", "underline", "strikethrough", "monospace"] },
          blockType: { options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6", "Blockquote"] },
          list: { options: ["unordered", "ordered"] },
          textAlign: { options: ["left", "center", "right", "justify"] },
          fontFamily: { options: ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"] },
          colorPicker: { colors: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#006699", "#9933cc", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444"] },
        }}
      />
    </div>
  );
};

export default RichText;