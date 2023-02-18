import { db } from "../../lib/db";

const handler = async (_, res) => {
    try {
        const results = await db.query(
            `SELECT * FROM keuangankas ORDER BY ID ASC `
        );
        await db.end;

        let dataIn = []
        let dataOut = []
        let totalIn = 0
        let totalOut = 0
        results.map((list)=>{
            if( list.Transaksi == 'IN' ){
                dataIn.push(list)
            }else{
                dataOut.push(list)
            }
        })

        dataIn.map((d)=>{
           totalIn += d.Nominal 
        })

        dataOut.map((d)=>{
            totalOut += d.Nominal
        })
        let response = {
            in : dataIn,
            out : dataOut,
            totalIN : totalIn,
            totalOut : totalOut,
            data : results
        }
        return res.json(response)

    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
    ;
export default handler;