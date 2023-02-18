import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Head from 'next/head'
import { useKeuanganKas } from '../../../lib/keuangankas'
import Form from 'react-bootstrap/Form';
import Router from 'next/router'
import { mutate } from 'swr'
import Moment from 'react-moment'
import moment from 'moment'
import { FormatRupiah } from "@arismun/format-rupiah";
import { ExportReactCSV } from './ExportReactCSV'

const Kas = ()=>{
    const { data, error } = useKeuanganKas()

    if (error) {
        return <div>error</div>
    }
    if (!data) {
        return <div>loading
        </div>
    } 

    async function hapusTransaksi(id) {
        console.log(id)
        confirm('data yang dihapus tidak bisa dikembalikan')
        let res = await fetch(`/api/hapustransaksi?id=${id}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw Error(json.message)
        mutate('/api/hapustransaksi')
        alert('Transaksi telah dihapus')
        Router.push('/admin/kasInOut/Kas')

    }
    
    return(
        <>
            <Head>
                <title>Pemasukan dan Pengeluaran Kas</title>
                <link rel="icon" href="/lg.png" />
            </Head>

            <div className='mt-5'>
                <div className="jumbotron text-center" style={{ backgroundColor: '#25316D' }}>
                    <h3 className="display-12" style={{ color: 'orange' }}><em>Pemasukan dan Pengeluaran Kas</em></h3>
                </div>
            </div>

            <div className='container kas' >

                <div className='row mt-4'>
                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-IN mb-1'>
                            <i className="bi bi-wallet2"></i>
                            </div>
                            <span className='title-sm'>Pemasukan</span>
                            <h3 className='fw-bold'><FormatRupiah value={data.totalIN}/> ,-</h3>
                            <div>
                            <span className='title-sm text-ungu fw-bold'>{data.in.length}</span><span className='title-sm'> Transaksi</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-OUT mb-1'>
                            <i className="bi bi-cash-stack"></i>
                            </div>
                            <span className='title-sm'>Pengeluaran</span>
                            <h3 className='fw-bold'><FormatRupiah value={data.totalOut}/>,-</h3>
                            <div>
                            <span className='title-sm text-ungu fw-bold'>{data.out.length}</span><span className='title-sm'> Transaksi</span>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4 mt-2'>
                        <div className='card-wraper p-4'>
                            <div className='icon-wrapper-IN text-green bg-green mb-1'>
                                <i className="bi bi-wallet2"></i>
                            </div>
                            <span className='title-sm'>Kas Tersisa</span>
                            <h3 className='fw-bold'><FormatRupiah value={data.totalIN - data.totalOut}/> ,-</h3>
                            <div>
                                <span className='title-sm text-ungu fw-bold'>{data.data.length}</span><span className='title-sm'> Transaksi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className='card-20'>

                    <div className="card-container" >
                        <div className='d-flex justify-content-between mb-3'>
                            <h2 className='text-black'>Transaksi</h2>
                            <div className='d-flex gap-3'>
                                <TransactionModal />
                                <ExportReactCSV csvData={data.data} fileName='Report Pemasukan dan pengeluaran kas' />
                            </div>
                        </div>
                        <div className='table-responsive'>
                            <table className="table">
                                <thead>
                                    <tr className='text-center' style={{ backgroundColor: '#97D2EC' }}>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tanggal</th>
                                        <th scope="col">Transaski</th>
                                        <th scope="col">Nominal</th>
                                        <th scope="col">Deskripsi</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.data.map((d)=>{
                                        return(
                                            <tr className='text-center' style={{ backgroundColor: '#FEF5AC' }} key={d.id}>
                                                <th scope="row">{d.id}</th>
                                                <td>
                                                    <Moment format="YYYY/MM/DD">
                                                    {d.Tanggal}
                                                    </Moment>    
                                                </td>
                                                <td 
                                                    className={d.Transaksi == 'IN' ? 'text-success' : 'text-danger'}>
                                                    {d.Transaksi}
                                                </td>
                                                <td>{d.Nominal}</td>
                                                <td>{d.Description}</td>
                                                <td>
                                                <button className="btn btn-danger" onClick={()=> hapusTransaksi(d.id)}>Hapus</button>
                                                   <KasUpdate data={d} /></td>
                                            </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

function TransactionModal() {
  const [show, setShow] = useState(false);
    const [tanggal, setTanggal] = useState('')
    const [nominal, setNominal] = useState('')
    const [transaksi, setTransaksi] = useState('')
    const [description, setDescription] = useState('')
  const handleClose = () => {
    setShow(false)
    setTanggal('')
    setNominal('')
    setDescription('')
  };
  const handleShow = () => setShow(true);

  
  async function submitHandler(e) {
    e.preventDefault()
    if( tanggal,nominal,transaksi, description == '' ){
        alert('form wajib di isi semua')
        return
    } 

    try {
        const res = await fetch("http://localhost:3000/api/inputtransaksikas", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               tanggal, nominal, transaksi, description
            }),
        })

        const json = await res.json()
        if (!res.ok) throw Error(json.message)
        
        Router.push('/admin/kasInOut/Kas')
        handleClose()
        alert('Transaksi ditambahkan')
    } catch (e) {
        throw Error(e.message)
    }
}


  return (
    <>
      <Button 
      variant="primary" 
      onClick={handleShow}>
        Transaksi
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transaksi Kas</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3 text-black" 
            controlId="formBasicEmail">
                <Form.Label>Nominal</Form.Label>
                <Form.Control
                    type="number"
                    name="nominal"
                    value={nominal}
                    onChange={(e)=>{setNominal(e.target.value)}}
                />
            </Form.Group>
            <Form.Group className="mb-3 text-black" 
            controlId="formBasicEmail">
                <Form.Label>Tanggal</Form.Label>
                <Form.Control
                    type="date"
                    name="tanggal"
                    value={tanggal}
                    onChange={(e)=>{setTanggal(e.target.value)}}
                />
            </Form.Group>

            <div className='d-flex gap-4 mb-4'>
                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="transaksi" 
                    value="IN" 
                    onChange={(e)=>{setTransaksi(e.target.value)}}
                    />
                    
                    <label className="form-check-label text-black" >
                        Kas Masuk
                    </label>
                </div>

                <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="transaksi" 
                    value="OUT" 
                    onChange={(e)=>{setTransaksi(e.target.value)}}
                    />
                    <label className="form-check-label text-black">
                        Kas Keluar
                    </label>
                </div>

            </div>

            <Form.Group className="mb-3 text-black" 
            controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </Form.Group>

            <button 
            className='btn btn-primary' 
            type='submit'>submit</button>
        </Form>

        </Modal.Body>
      </Modal>
    </>
  );
}

function KasUpdate(props) {
    const [show, setShow] = useState(false);
    const [id, setId] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [nominal, setNominal] = useState('')
    const [transaksi, setTransaksi] = useState('')
    const [description, setDescription] = useState('')
    
    const handleClose = () => {
      setShow(false)
      setTanggal('')
      setNominal('')
      setTransaksi('')
      setDescription('')
    };
    const handleShow = () => {
        setShow(true)
        setTanggal(moment(props.data.Tanggal).format('YYYY-MM-DD'))
        setNominal(props.data.Nominal)
        setTransaksi(props.data.Transaksi)
        setId(props.data.id)
        setDescription(props.data.Description)
        
    };

    async function submitHandler(e) {
        e.preventDefault()
        if( tanggal,nominal,transaksi, description == '' ){
            alert('form wajib di isi semua')
            return
        } 
    
        try {
            const res = await fetch('/api/updatetransaksi', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id,
                    tanggal,
                    nominal,
                    transaksi,
                    description
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Update data sukses")
            Router.push('/admin/kasInOut/Kas')
            handleClose()
        } catch (e) {
            throw Error(e.message)
        }
    }
  
    return (
      <>
        <Button 
        variant="primary" 
        onClick={handleShow}>
          Edit
        </Button>
  
        <Modal 
        show={show} 
        onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Transaksi Kas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
          <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3 text-black" 
              controlId="formBasicEmail">
                  <Form.Label>Nominal</Form.Label>
                  <Form.Control
                      type="number"
                      name="nominal"
                      value={nominal}
                      onChange={(e)=>{setNominal(e.target.value)}}
                  />
              </Form.Group>
              <Form.Group className="mb-3 text-black" 
              controlId="formBasicEmail">
                  <Form.Label>Tanggal</Form.Label>
                  <Form.Control
                      type="date"
                      name="tanggal"
                      value={tanggal}
                      onChange={(e)=>{setTanggal(e.target.value)}}
                      
                  />
              </Form.Group>
  
              <div className='d-flex gap-4 mb-4'>
                  <div className="form-check">
                    <input 
                    className="form-check-input" 
                    type="radio" 
                    name="transaksi" 
                    value="IN" 
                    onChange={(e)=>{setTransaksi(e.target.value)}}
                    defaultChecked={ transaksi == 'IN' ? true : false }
                    />    
                      <label className="form-check-label text-black" >
                          Kas Masuk
                      </label>
                  </div>
  
                  <div className="form-check">
                        <input 
                      className="form-check-input" 
                      type="radio" 
                      name="transaksi" 
                      value="OUT" 
                      onChange={(e)=>{setTransaksi(e.target.value)}}
                      defaultChecked={ transaksi == 'OUT' ? true : false }
                      />  
                      <label className="form-check-label text-black">
                          Kas Keluar
                      </label>
                  </div>

  
              </div>
                  <Form.Group className="mb-3 text-black" 
                            controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                      type="text"
                      name="description"
                      value={description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                  />
              </Form.Group>
              <button 
              className='btn btn-primary' 
              type='submit'>submit</button>
          </Form>
  
          </Modal.Body>
        </Modal>
      </>
    );
}

export default Kas