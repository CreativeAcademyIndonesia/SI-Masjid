//@ts-check
import { db } from "../../lib/db";

const handler = async (req, res) => {
    const { id, nominal, tanggal, transaksi, description } = req.body;
    try {
        if ( !nominal || !tanggal || !transaksi || !description) {
            return res
                .status(400)
                .json({ message: 'Input harus diisi semua' })
        }
        const results = await db.query(
            `UPDATE keuangankas set Nominal=?, Tanggal=?, Transaksi=?, Description=?  WHERE id =?
        `, [nominal, tanggal, transaksi, description, id]
        );

        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;
