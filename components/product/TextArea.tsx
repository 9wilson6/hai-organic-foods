"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef, useState } from "react";
import TextEditor from "./TextEditor";

interface TextAreaProps {
  setDescription: React.Dispatch<React.SetStateAction<any>>;
  description: string;
}

export default function TextArea({
  setDescription,
  description,
}: TextAreaProps) {
  const [focus, setFocus] = useState(false);
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose w-full focus:outline-none leading-5 prose-a:text-green-500 prose-a:font-semibold",
      },
    },
    content: description,
  });

  const html = editor?.getHTML();

  useEffect(() => {
    setDescription(html);
  }, [html, setDescription]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setFocus(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className={`mx-auto border-[1px] mt-4 rounded-xl ${
        focus ? "border-green-500 border-[2px] ml-0" : ""
      }`}
      ref={menuRef}
    >
      {/* <TextEditor editor={editor} /> */}
      <EditorContent
        editor={editor}
        style={{ padding: "18px" }}
        onClick={() => setFocus(true)}
      />
    </div>
  );
}
