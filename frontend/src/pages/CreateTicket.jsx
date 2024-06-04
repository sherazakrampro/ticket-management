import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    priority: "",
    category: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/tickets/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
        console.error("Error:", error.response);
      } else {
        setError("An error occurred. Please try again.");
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-4xl text-center font-bold mb-4">Create a Ticket</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-sky-200 p-3 rounded-lg"
          type="text"
          placeholder="Title"
          id="title"
          required
          onChange={handleChange}
        />
        <textarea
          className="bg-sky-200 p-3 rounded-lg"
          placeholder="Description"
          id="description"
          required
          onChange={handleChange}
        />
        <select
          className="bg-sky-200 p-3 rounded-lg"
          id="status"
          required
          value={formData.status}
          onChange={handleChange}
        >
          <option value="" disabled>
            Status
          </option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
        <select
          className="bg-sky-200 p-3 rounded-lg"
          id="priority"
          required
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="" disabled>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="bg-sky-200 p-3 rounded-lg"
          id="category"
          required
          value={formData.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Category
          </option>
          <option value="Bug">Bug</option>
          <option value="Feature Request">Feature Request</option>
          <option value="Support">Support</option>
          <option value="Improvement">Improvement</option>
        </select>
        <button className="bg-sky-700 text-white p-3 rounded-lg hover:bg-sky-800 uppercase disabled:opacity-80">
          Create
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-red-700 text-white p-3 rounded-lg hover:bg-red-800 uppercase disabled:opacity-80"
        >
          Discard
        </button>
      </form>
      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default CreateTicket;
