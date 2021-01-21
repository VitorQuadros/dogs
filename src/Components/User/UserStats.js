import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { GET_STATS } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraph from "./UserStatsGraph";

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraph data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
