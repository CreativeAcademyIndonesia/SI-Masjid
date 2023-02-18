import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { search } = req.query
    try {
        console.log(req.query)
        const results = await db.query(
            `SELECT * FROM dataalmarhum WHERE nama LIKE '%${search}%'`
            ,
        );

        await db.end;
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;