import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    DataGrid
} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));




function Product() {
    let [product, setProduct] = useState([]);
    const [post, setpost] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/getAllProducts`)
            .then(
                res => {
                    console.log(res.data.data);
                    setpost(res.data.data);
                }
            ).catch(err => {
                console.log(err)
            })
    }, [])


    const columns = [
        {
            field: "",
            headerName: "Edit",
            sortable: false,
            width: 100,
            cellClassName: 'mouse-pointer-cursor',
            renderCell: () => (
                <a href="/Add/Prdouct"> <EditIcon >EditIcon</EditIcon></a>
            )
        },
        { field: 'Barcode', headerName: 'Barcode', width: 150 },
        { field: 'Brand', headerName: 'Brand', width: 130 },
        { field: 'ProductName', headerName: 'Product Name', width: 180 },
        {
            field: 'Weight',
            headerName: 'Weight',
            type: 'number',
            width: 130,
        },
        {
            field: 'Discount',
            headerName: 'Discount in %',
            width: 160,
            // valueGetter: (params) =>
            //     `${params.getValue('Discount') || '0'} %  ''}`,
        },
        {
            field: 'MRP',
            headerName: 'MRP',
            width: 100,
            type: Number,
        },
        {
            field: 'SGST',
            headerName: 'SGST',
            width: 100,
            // valueGetter: (params) =>
            //     `${params.getValue('SGST') || '0'} %  ''}`,
        },
        {
            field: 'CGST',
            headerName: 'CGST',
            width: 100,
            // valueGetter: (params) =>
            //     `${params.getValue('CGST') || '0'} %  ''}`,
        },
        {
            field: 'TotalGst',
            headerName: 'TotalGst',
            width: 130,
            // valueGetter: (params) =>
            //     `${params.getValue('TotalGst') || '0'} %  ''}`,
        },
    ];
    const classes = useStyles();
    return (

        <div className={`outer-div ${classes.root}`}>
            <div className="product-header">
                <div className="title-container-rhs">
                    <Button variant="contained" onClick={() => window.location.href = '/Add/Product'} color="secondary">
                        Add Product
                    </Button>
                </div>

            </div>
            <div className='productdata-outer-div'>
                <DataGrid rows={post} columns={columns} pageSize={20} columnBuffer={2} checkboxSelection />
                <h1>{post.TotalGst}</h1>
            </div>


        </div>
    )
}

export default Product
