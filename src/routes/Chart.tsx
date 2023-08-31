import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface CharProps {
    coinId : string;
}

function Chart({coinId} : CharProps) {
    const {isLoading, data : historyData} = useQuery(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    return <h1>{coinId}</h1>;
}

export default Chart;