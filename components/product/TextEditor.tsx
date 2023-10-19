import React from "react";
import { Editor } from "@tiptap/react";

type TextEditorProps = {
  editor: Editor | null;
};

export default function TextEditor({ editor }: TextEditorProps) {
  return (
    <div>
      <div className="mt-6 rounded-lg border-[1px]">
        <div className="flex items-center justify-around">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
            className={
              editor?.isActive("bold")
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"
            }
          >
            Bold
          </button>
        </div>
      </div>
    </div>
  );
}
