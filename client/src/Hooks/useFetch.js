import axios from "axios"
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          setData(res.data);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
      fetchData();
      // console.log(import.meta.env.PORT_NO)
    }, [url]);
  
    const reFetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
  
    return { data, loading, error,reFetch};
  };
  
  export default useFetch;