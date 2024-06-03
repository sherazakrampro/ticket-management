import { useEffect, useState } from "react";
import axios from "axios";
import Ticket from "../components/Ticket";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/tickets");
        setTickets(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching tickets", error);
      }
    };

    getAllTickets();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-wrap justify-evenly gap-6 mt-4">
      {loading && (
        <p className="text-center text-3xl font-bold text-sky-700">
          Loading...
        </p>
      )}
      {!loading && tickets.length === 0 && <p>No tickets available</p>}
      {!loading &&
        tickets.length > 0 &&
        tickets.map((ticket) => <Ticket key={ticket._id} ticket={ticket} />)}
    </div>
  );
};

export default Home;
