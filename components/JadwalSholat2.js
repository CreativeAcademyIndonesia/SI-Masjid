import React from 'react'
import Moment from 'react-moment'
import { useDailyJadwalsholat } from '../lib/dailyjadwalsholat'
import { useState } from "react";

const JadwalSholat2 = () => {

    const { data, error } = useDailyJadwalsholat()

    if (error ) {
        return <div>error</div>
    }
    if (!data ) {
        return <div>loading
        </div>
    }

    const getDate = new Date();
    const getYears = getDate.getFullYear();
    const getMont = getDate.getMonth() + 1;
    const getDay = getDate.getDate();


    function bulan() {
        if (getMont < 10) {
            bulan = `0${getMont}`
        } else {
            bulan = getMont;
        }
        return bulan;
    }

    function hari() {
        if (getDay < 10) {
            hari = `0${getDay}`
        } else {
            hari = getDay;
        }
        return hari;
    }

    // const tanggal = `${getYears}-${bulan()}-${hari()}`

    // const tampilKota = document.querySelector('.judul-kota');
    // tampilKota.textContent = localStorage.judulkota;

    // function getJadwalSholat() {
    //     fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/742/tanggal/' + tanggal)
    //         .then(response => response.json())
    //         .then(data => {
    //             const jadwal = data.jadwal.data;
    //             document.querySelector('.imsak').textContent = jadwal.imsak;
    //             document.querySelector('.subuh').textContent = jadwal.subuh;
    //             document.querySelector('.terbit').textContent = jadwal.terbit;
    //             document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
    //             document.querySelector('.ashar').textContent = jadwal.ashar;
    //             document.querySelector('.maghrib').textContent = jadwal.maghrib;
    //             document.querySelector('.isya').textContent = jadwal.isya;
    //         })
    // }

    // getJadwalSholat();


    return (
        <>
            {data.length > 0 ? 
                <div className='bg-sholat'>
                    <h3 className="display-12 text-center" style={{ color: 'orange' }}><em>Jadwal Sholat Singojuruh </em></h3><br />
                    <Clock tanggal={data[0].tanggal}/>
                    <div className="container-fluid  mb-5 card-deck text-center">
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">IMSAK</h6>
                                <p></p>
                                <p className='text-light imsak'>{data[0].imsyak}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">SUBUH</h6>
                                <p></p>
                                <p className='text-light subuh'>{data[0].subuh}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">TERBIT</h6>
                                <p></p>
                                <p className='text-light terbit'>{data[0].terbit}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">DZUHUR</h6>
                                <p></p>
                                <p className='text-light dzuhur'>{data[0].dzuhur}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">ASHAR</h6>
                                <p></p>
                                <p className='text-light ashar'>{data[0].ashar}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">MAGHRIB</h6>
                                <p></p>
                                <p className='text-light maghrib'>{data[0].maghrib}</p>
                            </div>
                        </div>
                        <div className="card bg-card-1 mb-2">
                            <div className="card-body">
                                <h6 className="card-title">ISYA'</h6>
                                <p></p>
                                <p className='text-light isya'>{data[0].isya}</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <h1></h1>
            }
        </>
            


    )
}

const Clock = (props) =>{
    let time  = new Date().toLocaleTimeString()
  
    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <>
            <h5 className='text-center'>Waktu</h5>
            <h1 className='text-center'>{ctime}</h1>
            <h4 className='text-center mb-4'>
                <Moment format="YYYY/MM/DD">
                    {props.tanggal}
                </Moment>
            </h4>
        </>
    )
  }
  

export default JadwalSholat2