import { useState } from "react";
import axios from "axios";

export default function Testing(user) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [repos, setRepos] = useState([]);
  const userUrl = "https://api.github.com/users/";

  const refet = async () => {
    try {
      setLoading(true);
      const result = await axios.get(userUrl + name);
      const resultrepo = await axios.get(userUrl + name + "/repos");
      setData(result.data);
      setRepos(resultrepo.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
    setName("");
  };

  return { data, loading, refet, error, repos, name, setName };
}
