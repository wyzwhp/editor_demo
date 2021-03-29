import styles from './index.less';
import Editor from 'wangeditor';
import { useEffect, useState } from 'react';
export default function IndexPage() {
  const [content,setContent]=useState('<h1>Hello World');
  useEffect(() => {
    const editor = new Editor('#editor1');
    editor.config.onchange = (html:string) => {
      setContent(html);
    };
    editor.config.menus = [
      'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'indent',
    'lineHeight',
    'foreColor',
    'backColor',
    'link',
    'list',
    'todo',
    'justify',
    'quote',
    'emoticon',
    'image',
    'video',
    'table',
    'code',
    'splitLine',
    'undo',
    'redo',
  ]
    editor.config.uploadImgShowBase64 = true; // 图片base64
    editor.create();
    editor.txt.html(content);
    return ()=>{
      editor.destroy()
    }
  }, [])
  return (
    <div id="box" className={styles.box}>
      <div className={styles.box_left}><div id="editor1" ></div></div>
      <div className={styles.box_right}> <h6 className={styles.previewBtn}>效果预览</h6>
      <div id="preview" dangerouslySetInnerHTML={{__html:content}}></div></div>
    </div>
  );
}
