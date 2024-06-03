import { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "../components/Ticket";

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
    <div className="max-w-6xl mx-auto p-4 flex flex-wrap gap-10 mt-4">
      {tickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
        tickets.map((ticket) => <Ticket key={ticket._id} ticket={ticket} />)
      )}
    </div>
  );
};

export default Home;
