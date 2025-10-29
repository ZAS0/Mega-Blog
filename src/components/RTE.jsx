import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="79b9zmwsja224ro33st487p5gxezs2g55yg4iiw6jgucf035"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} //This is to initiate change
          />
        )}
      />
    </div>
  );
}

/*
🧩 Purpose of Controller

In react-hook-form, the Controller component acts as a bridge between your form state and 
controlled components — like Editor from @tinymce/tinymce-react.

⚙️ Why you need it here:

Normally, react-hook-form works easily with native inputs (<input>, <textarea>, etc.) using 
register().But Editor is a custom controlled component — it manages its own internal value and 
doesn’t expose a native ref or onChange that register() can attach to.

🔍 Step-by-step flow:

Controller connects the Editor to your form’s control object (provided by useForm()).

It automatically:
Watches for changes in the Editor.
Calls onChange() when text changes.
Updates that value in the form’s internal state.

So when you submit the form with handleSubmit,
the latest content from the TinyMCE editor is included in the form data.

*/
