import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(3),
            width: '25ch',
            align: 'left'
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function ProductAdd() {
    const classes = useStyles();
    return (
        <div>
            <div className={`outer-div ${classes.root}`}>
                <div className="product-header">
                    <div className="title-container-rhs">
                        <Link href="/Product" color="secondary"> Back</Link>
                    </div>
                </div>
                <div className='productdata-outer-div'>
                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField required id="txtBarcode" label="Barcode" />

                        <TextField required id="txtBrand" label="Brand" />
                        <TextField required id="txtCategory" label="Category" type="search" />
                        <TextField required id="txtProductName" label="Product Name" />
                        <TextField id="txtWeight" label="Weight" type="number" />
                        <TextField id="txtMrp" label="MRP" type="number" />
                        <TextField id="txtDiscount" label="Discount(%)" type="number" />
                        <TextField id="txtCGST" label="CGST(%)" type="number" />
                        <TextField id="txtSGST" label="SGST(%)" type="number"
                            InputLabelProps={{
                                shrink: true,
                            }} />


                    </form>

                </div>
                <div className={`productAdd-buttons ${classes.root}`}>
                    <Button variant="contained" color='secondary'> Add</Button>
                    <Button variant="contained" color='primary'> Reset</Button>
                    <Button variant="contained" color='primary'> Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductAdd
