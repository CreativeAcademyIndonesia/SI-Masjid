import { db } from "../../lib/db";

const handler = async (req, res) => {
    const {nominal, tanggal, transaksi, description } = req.body;
    try {
        if ( !nominal || !tanggal || !transaksi || !description ) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(`
        INSERT INTO keuangankas (Nominal, Tanggal, Transaksi, Description)
        VALUES (?,?,?,?)
        `, [ nominal, tanggal, transaksi, description]
        );
        await db.end;

        return res.json(results)
    } catch(e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;