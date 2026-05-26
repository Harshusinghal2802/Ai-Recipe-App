export default function Editor({ text, setText }) {
  return (
    <div>
      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        className="w-full border p-3"
      />

      <div className="flex gap-2 mt-2">
        <button onClick={()=>setText(text + "😀")}>😀</button>
        <button onClick={()=>setText("<b>"+text+"</b>")}>B</button>
        <button onClick={()=>setText("<u>"+text+"</u>")}>U</button>
      </div>
    </div>
  );
}