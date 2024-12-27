import React, { useEffect, useState } from 'react';
import EditorNavbar from '../components/EditorNavbar';
import { Editor as MonacoEditor } from '@monaco-editor/react';
import { VscColorMode } from "react-icons/vsc";
import { FaExpand } from "react-icons/fa";

const Editor = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [tab, setTab] = useState('index.html');

  const [htmlcode, setHtmlCode] = useState("");
  const [csscode, setCssCode] = useState("");
  const [jscode, setJsCode] = useState("");

  const changeTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const run = () => {
    const html =  htmlcode
    const css = `<style>${csscode}</style>`;
    const js = `<script>${jscode}</script>`;
    const iframe = document.getElementById('output');
    iframe.srcdoc = html + css + js;
  }

useEffect(() =>{
  run()
} , [htmlcode, csscode, jscode])

  return (
    <>
      <EditorNavbar />
      <div className="flex h-screen">
        <div className={`left ${isExpanded ? "w-full" : "w-1/2"} flex flex-col`}>
          <div className='flex items-center justify-between gap-4 bg-slate-800 h-10 px-4'>
            <div className='flex items-center gap-4'>
              <button onClick={() => setTab("index.html")} className={`bg-slate-600 px-2 text-lg cursor-pointer ${tab === 'index.html' ? 'bg-slate-700' : ''}`}>index.html</button>
              <button onClick={() => setTab("styles.css")} className={`bg-slate-600 px-2 text-lg cursor-pointer ${tab === 'styles.css' ? 'bg-slate-700' : ''}`}>styles.css</button>
              <button onClick={() => setTab("script.js")} className={`bg-slate-600 px-2 text-lg cursor-pointer ${tab === 'script.js' ? 'bg-slate-700' : ''}`}>script.js</button>
            </div>
            <div className='flex items-center gap-4'>
              <i><VscColorMode className='text-xl cursor-pointer' onClick={changeTheme} /></i>
              <i><FaExpand className='text-xl cursor-pointer' onClick={() => setIsExpanded(!isExpanded)} /></i>
            </div>
          </div>
          {tab === 'index.html' && (
            <MonacoEditor
              onChange={(e) => {setHtmlCode(e) ;
                run()
              }}
              height="calc(100vh - 40px)"
              theme={isLightMode ? 'light' : 'vs-dark'}
              defaultLanguage="html"
              defaultValue="<!-- HTML content here -->"
            />
          )}
          {tab === 'styles.css' && (
            <MonacoEditor
            onChange={(e) => {setCssCode(e) ; run()}}
              height="calc(100vh - 40px)"
              theme={isLightMode ? 'light' : 'vs-dark'}
              defaultLanguage="css"
              defaultValue="/* CSS content here */"
            />
          )}
          {tab === 'script.js' && (
            <MonacoEditor
            onChange={(e) => {setJsCode(e) ; run()}}
              height="calc(100vh - 40px)"
              theme={isLightMode ? 'light' : 'vs-dark'}
              defaultLanguage="javascript"
              defaultValue="// JavaScript content here"
            />
          )}
        </div>
        {!isExpanded && (
          <iframe
            id='output'
            src=""
            frameBorder="0"
            className='w-1/2 h-full bg-white'
          ></iframe>
        )}
      </div>
    </>
  );
}

export default Editor;