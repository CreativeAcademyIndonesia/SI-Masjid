import { db } from "../../lib/db";

const handler = async (_, res) => {
    try {
        const date = new Date();
        const results = await db.query(
            `SELECT * FROM jadwalsholat WHERE MONTH(tanggal) = ${date.getMonth()+1} and YEAR(tanggal) = ${date.getFullYear()};`
        );
        await db.end;
        console.log(results)
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
    ;
export default handler;