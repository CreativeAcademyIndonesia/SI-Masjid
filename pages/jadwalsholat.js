import Head from 'next/head'
import React from 'react'
import { useDailyJadwalsholat, useMonthlyJadwalsholat } from '../lib/dailyjadwalsholat'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Moment from 'react-moment'

const Jadwalsholatp = () => {
    const { monthly } = useMonthlyJadwalsholat()
    const { data, error } = useDailyJadwalsholat()

    if (error || monthly.error ) {
        return <div>error</div>
    }
    if (!data || !monthly.data) {
        return <div>loading
        </div>
    }
    return (

        <>
            <Head>
                <title>Jadwal Sholat</title>
                <link rel="icon" href="/lg.png" />
            </Head>
            <Header />
            <div className='container py-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: 'white' }}>
                    <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Jadwal Sholat</em></h3>
                    <p className='lead' style={{ color: 'green' }}>Mari Sholat Berjama'ah</p>
                    <p className="lead">Dari Abi Darda` radhiyallahu ‘anhu bahwa Rasulullah shallallahu ‘alaihi wasallam bersabda,"Tidaklah 3 orang yang tinggal di suatu kampung atau pelosok tapi tidak melakukan shalat jamaah, kecuali syetan telah menguasai mereka.
                        Hendaklah kalian berjamaah, sebab srigala itu memakan domba yang lepas dari kawanannya". (HR Abu Daud 547 dan Nasai 2/106 dengan sanad yang hasan)</p>
                </div>
            </div>
            <div className="container mt-3 mb-5">
                <h2><span style={{ color: 'orange' }}>Jadwal Sholat</span> Singojuruh</h2>
                <h2><span style={{ color: 'orange' }}>Tanggal : </span> 
                    {
                        data.length > 0 ? 
                        <Moment format="YYYY/MM/DD">
                            {data[0].tanggal}
                        </Moment>
                        : 
                        'tanggal belum di atur'
                    }
                </h2>
                <p className='text-white'>Per Satu Hari, Jadwal akan berubah setiap Harinya-nya</p>

                    { data.length > 0 ?
                        <div className='row mt-4'>
                            <div className='col-md-2 mt-2'>
                                <div className="cards shadow-lg bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>IMSYAK</span>
                                    <h4 className='font-weight-bold'>{data[0].imsyak}</h4>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className="cards shadow-lg bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>SHUBUH</span>
                                    <h4 className='font-weight-bold'>{data[0].subuh}</h4>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className="cards shadow-lg bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>DZUHUR</span>
                                    <h4 className='font-weight-bold'>{data[0].dzuhur}</h4>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className="cards shadow-lg bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>ASHAR</span>
                                    <h4 className='font-weight-bold'>{data[0].ashar}</h4>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className="cards shadow-lg bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>MAGhRIB</span>
                                    <h4 className='font-weight-bold'>{data[0].maghrib}</h4>
                                </div>
                            </div>
                            <div className='col-md-2 mt-2'>
                                <div className="cards bg-white border-4 rounded-3 text-black p-2">
                                    <span className='title-md'>ISYA</span>
                                    <h4 className='font-weight-bold'>{data[0].isya}</h4>
                                </div>
                            </div>  
                        </div>
                    :
                        <h1>Tidak ada jadwal</h1>
                    }

                <div className='table-responsive mt-4'>
                    <table className="table table-borderd">
                        <thead>
                            <tr>
                                <th scope="col" style={{ color: 'green' }}>Bulan</th>
                                <th scope="col" style={{ color: 'green' }}>Hari/Tanggal</th>
                                <th scope="col" style={{ color: 'green' }}>Imsyak</th>
                                <th scope="col" style={{ color: 'green' }}>Subuh</th>
                                <th scope="col" style={{ color: 'green' }}>Terbit</th>
                                <th scope="col" style={{ color: 'green' }}>Dzuhur</th>
                                <th scope="col" style={{ color: 'green' }}>Ashar</th>
                                <th scope="col" style={{ color: 'green' }}>Maghrib</th>
                                <th scope="col" style={{ color: 'green' }}>Isya'</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthly.data.map((jdw, idx) => (
                                <tr key={idx}>
                                    <th scope="row" style={{ color: 'orange' }}>{jdw.bulan}</th>
                                    <th scope="row" className='text-white'>
                                        <Moment format="YYYY/MM/DD">
                                            {jdw.tanggal}
                                        </Moment>
                                    </th>
                                    <td className='text-white'>{jdw.imsyak}</td>
                                    <td className='text-white'>{jdw.subuh}</td>
                                    <td className='text-white'>{jdw.terbit}</td>
                                    <td className='text-white'>{jdw.dzuhur}</td>
                                    <td className='text-white'>{jdw.ashar}</td>
                                    <td className='text-white'>{jdw.maghrib}</td>
                                    <td className='text-white'>{jdw.isya}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Jadwalsholatp;