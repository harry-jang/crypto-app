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
    const {isLoading, data} = useQuery<IHistorical[]>(
        ["ohlcv", coinId], 
        () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        }
        );
    return <div>{isLoading ? "Loading chart..." : (<ApexChart 
        type="candlestick"
        series={[
            {
                data: 
                data?.map((price) => ({
                    
                    x: new Date(price.time_close * 1000),           
                    y: [
                        parseFloat(price.open),
                        parseFloat(price.high),
                        parseFloat(price.low),
                        parseFloat(price.close),
                    ]
                })) ?? [],
            },
        ]}
        options={{
            theme:{
                mode: "dark"
            },
            chart: {
                type: 'candlestick',
                height: 350,
                width: 500,
                background: "transparent",
                toolbar:{
                    show: false
                },
            },
            yaxis: {
                tooltip: {
                    enabled:true
                }
            },
            xaxis: {
                type:"datetime",
                categories: data?.map((price) => new Date(price.time_close * 1000).toUTCString()) ?? [],
                axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
            }
        }}
        />

        )}</div>
}

export default Chart;