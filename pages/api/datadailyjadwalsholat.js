import { db } from "../../lib/db";

const handler = async (_, res) => {
    try {
        const today = new Date().toJSON().slice(0, 10);
        const results = await db.query(
            `SELECT * FROM jadwalsholat WHERE tanggal = '${today}'`
        );
        await db.end;

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}
    ;
export default handler;