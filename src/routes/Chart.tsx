import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface CharProps {
    coinId : string;
}

interface IHistorical{
    time_open: number;
    time_close: number;
    open:string;
    high:string;
    low:string;
    close:string;
    volume:string;
    market_cap: number;
}

function Chart({coinId} : CharProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
    return <div>{isLoading ? "Loading chart..." : (<ApexChart 
        type="line"
        series={[
            {
                name:"Price",
                data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
        ]}
        options={{
            theme:{
                mode: "dark"
            },
            chart: {
                height: 500,
                width: 500,
                toolbar:{
                    show: false
                },
                background: "transparent",
            },
            grid:{
                show:false
            },
            stroke: {
                curve: "smooth",
                width: 4,
            },
            yaxis: {
                show:false,
            },
            xaxis: {
                labels:{
                    show : false,
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
            }
        }}
        />

        )}</div>
}

export default Chart;