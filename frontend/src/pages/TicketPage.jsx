import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TicketPage = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    navigate(`/tickets/edit/${id}`);
  };

  const handleDeleteButtonClick = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `http://localhost:3000/tickets/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Failed to delete ticket");
      }
    }
  };

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/tickets/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials: true,
          }
        );
        setTicket(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch ticket details");
        setLoading(false);
      }
    };

    fetchTicket();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-3xl font-bold text-sky-700 p-4 mt-4">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 m-6">{error}</div>;
  }

  if (!ticket) {
    return <div className="text-red-500 m-6">Ticket not found</div>;
  }

  return (
    <>
      <div className="p-4 mt-8 max-w-lg w-full mx-auto bg-sky-300 border border-sky-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">
          {ticket.ticket.title}
        </h1>
        <p className="text-gray-700 mb-4">{ticket.ticket.description}</p>
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <span className="font-semibold">Status:</span>
          <span>{ticket.ticket.status}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <span className="font-semibold">Priority:</span>
          {ticket.ticket.priority === "High" ? (
            <span className="text-red-600">{ticket.ticket.priority}</span>
          ) : ticket.ticket.priority === "Medium" ? (
            <span className="text-green-600">{ticket.ticket.priority}</span>
          ) : (
            <span className="text-yellow-600">{ticket.ticket.priority}</span>
          )}
        </div>
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <span className="font-semibold">Category:</span>
          <span>{ticket.ticket.category}</span>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span
            onClick={handleEditButtonClick}
            className="font-semibold text-sm bg-sky-700 text-white py-2 px-4 rounded-lg hover:bg-sky-800 cursor-pointer"
          >
            Edit
          </span>
          <span
            onClick={handleDeleteButtonClick}
            className="font-semibold text-sm bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 cursor-pointer"
          >
            Delete
          </span>
        </div>
      </div>
      <Link to="/">
        <div className="mt-6 max-w-lg w-full mx-auto font-bold text-sky-700 hover:underline cursor-pointer">
          Go Back
        </div>
      </Link>
    </>
  );
};

export default TicketPage;
