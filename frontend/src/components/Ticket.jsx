import PropTypes from "prop-types";

const Ticket = ({ ticket }) => {
  return (
    <div className="max-w-sm bg-sky-300 border border-sky-200 rounded-lg shadow-lg overflow-hidden mb-4">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {ticket.title}
        </h2>
        <p className="text-gray-700 mb-4">{ticket.description}</p>
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <span className="font-semibold">Status:</span>
          <span>{ticket.status}</span>
        </div>
        <div className="flex justify-between items-center text-gray-700">
          <span className="font-semibold">Priority:</span>
          <span>{ticket.priority}</span>
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
  }).isRequired,
};

export default Ticket;
