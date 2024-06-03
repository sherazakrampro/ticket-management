const CreateTicket = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold my-4">Create a Ticket</h1>
      <form className="flex flex-col gap-4">
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="text"
          placeholder="Title"
          id="title"
          required
        />
        <textarea
          className="bg-sky-200 p-3 rounded-lg"
          type="text"
          placeholder="Description"
          id="description"
          required
        />
        <select
          className="bg-sky-200 p-3 rounded-lg"
          name="status"
          id="status"
          required
        >
          <option value="" disabled selected>
            Status
          </option>
          <option value="open">Open</option>
          <option value="in-progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>
        <select
          className="bg-sky-200 p-3 rounded-lg"
          name="priority"
          id="priority"
          required
        >
          <option value="" disabled selected>
            Priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <select
          className="bg-sky-200 p-3 rounded-lg"
          name="category"
          id="category"
          required
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="bug">Bug</option>
          <option value="feature-request">Feature Request</option>
          <option value="support">Support</option>
          <option value="improvement">Improvement</option>
        </select>
        <button className="bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-800 uppercase disabled:opacity-80">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
