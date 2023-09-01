import { styled } from "styled-components";


const TableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.th`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  text-align: left;
  color: ${(props) => props.theme.accentColor}
`;

const DataCell = styled.td`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.textColor};
  text-align: left;
  color: ${(props) => props.theme.textColor}
`;

interface PriceProps {
    coinId : string;

    state : {
        ath_date:string,
        ath_price?:number;
        market_cap?:number;
        market_cap_change_24h?:number;
        percent_change_1h?:number;
        percent_change_1y?:number;
        percent_change_6h?:number;
        percent_change_7d?:number;
        percent_change_12h?:number;
        percent_change_15m?:number;
        percent_change_24h?:number;
        percent_change_30d?:number;
        percent_change_30m?:number;
        percent_from_price_ath?:number;
        price?:number;
        volume_24h?:number;
        volume_24h_change_24h?:number;
    }
}




function Price({coinId, state} : PriceProps) {
    
    return (
    <TableContainer>
        <Table>
            <tbody>
                <tr>
                    <HeaderCell>현재 시세</HeaderCell>
                    <DataCell>{state.price?.toFixed(2)}</DataCell>
                    <HeaderCell>시가총액</HeaderCell>
                    <DataCell>{state.market_cap}</DataCell>
                    
                </tr>  
                <tr>
                    <HeaderCell>변동<br/>(전일)</HeaderCell>
                    <DataCell>{state.percent_change_24h}</DataCell>
                    <HeaderCell>변동<br/>(7일)</HeaderCell>
                    <DataCell>{state.percent_change_7d}</DataCell>
                </tr>
                <tr>
                    <HeaderCell>거래량<br/>(전일)</HeaderCell>
                    <DataCell>{state.volume_24h?.toFixed(2)}</DataCell>
                    <HeaderCell>거래 변동률<br/>(전일)</HeaderCell>
                    <DataCell>{state.volume_24h_change_24h?.toFixed(2)}</DataCell>
                </tr>
                <tr>
                    <HeaderCell>최고가</HeaderCell>
                    <DataCell>{state.ath_price?.toFixed(2)}</DataCell>
                    <HeaderCell>최고가<br/>갱신일</HeaderCell>
                    <DataCell>{state.ath_date}</DataCell>
                </tr>
            </tbody>
        </Table>
    </TableContainer>
    );

}

export default Price;