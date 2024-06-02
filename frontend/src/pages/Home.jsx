import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tickets");
        setTickets(response.data);
      } catch (error) {
        console.error("Error fetching tickets", error);
      }
    };

    getAllTickets();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-3">
      {tickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
        tickets.map((ticket) => <div key={ticket._id}>{ticket.title}</div>)
      )}
    </div>
  );
};

export default Home;
