import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TicketPage = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>{error}</div>;
  }

  if (!ticket) {
    return <div>Ticket not found</div>;
  }

  return (
    <div className="p-4 mt-8 max-w-lg w-full mx-auto bg-sky-300 border border-sky-200 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">
        {ticket.ticket.title}
      </h1>
      <p className="text-gray-700 mb-4">{ticket.ticket.description}</p>
      <div className="flex justify-between items-center text-gray-700 mb-4">
        <span className="font-semibold">Status:</span>
        <span>{ticket.ticket.status}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 mb-4">
        <span className="font-semibold">Priority:</span>
        <span>{ticket.ticket.priority}</span>
      </div>
      <div className="flex justify-between items-center text-gray-700 mb-4">
        <span className="font-semibold">Category:</span>
        <span>{ticket.ticket.category}</span>
      </div>
    </div>
  );
};

export default TicketPage;
