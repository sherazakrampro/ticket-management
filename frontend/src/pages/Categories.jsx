import { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/category");
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching categories", error);
      }
    };

    getAllCategories();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-6 mt-4">
      {loading && (
        <p className="text-center text-3xl font-bold text-sky-700">
          Loading...
        </p>
      )}
      {!loading && categories.length === 0 && <p>No category available</p>}
      {!loading &&
        categories.length > 0 &&
        categories.map((category) => {
          return (
            <h1 className="font-bold text-3xl" key={category._id}>
              {category.name}
            </h1>
          );
        })}
    </div>
  );
};

export default Categories;
