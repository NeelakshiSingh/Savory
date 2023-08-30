const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl p-4">Contact Us</h1>
      <input
        type="text"
        placeholder="Name"
        className="border border-solid border-black w-32 m-2 px-2"
      />
      <input
        type="text"
        placeholder="Email"
        className="border border-solid border-black w-32 m-2 px-2"
      />
      <button className="bg-slate-200 rounded px-2 m-2">Submit</button>
    </div>
  );
};
export default Contact;
