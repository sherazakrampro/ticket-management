import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Ticket = ({ ticket }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tickets/${ticket._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-sm w-80 bg-sky-300 border border-sky-200 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 mb-6"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {ticket.title}
        </h2>
        <p className="text-gray-700 mb-4">{ticket.description}</p>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold">Status:</span>
          <span>{ticket.status}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold">Priority:</span>
          {ticket.priority === "High" ? (
            <span className="text-red-600">{ticket.priority}</span>
          ) : ticket.priority === "Medium" ? (
            <span className="text-green-600">{ticket.priority}</span>
          ) : (
            <span className="text-yellow-600">{ticket.priority}</span>
          )}
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold">Category:</span>
          <span>{ticket.category}</span>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Ticket;
