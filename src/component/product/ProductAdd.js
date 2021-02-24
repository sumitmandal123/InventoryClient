import React, { useEffect, useState, useRef } from 'react'
import Link from '@material-ui/core/Link'
import { get } from '../../services/httpService'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { addNewData } from '../../services/httpService'
import { useForm, Form } from '../Shared/useForm';
import { prodctUrl } from '../../utils/constants/urlConstan'
import { useParams } from "react-router-dom";



const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}))


const initialFValues = {
    Barcode: '',
    Brand: '',
    ProductName: '',
    Category: '',
    Weight: 0,
    CGST: 0,
    Discount: 0,
    SGST: 0,
    MRP: 0,
}


function ProductAdd() {

    const { id } = useParams();
    const classes = useStyles();
    const [isEdit, setIsEdit] = useState(false)
    const [addEditButtontext, setAddEditButtontext] = useState('Add');
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('Barcode' in fieldValues)
            temp.Barcode = fieldValues.Barcode != "" ? "" : "This field is required."
        if ('Brand' in fieldValues)
            temp.Brand = fieldValues.Brand ? "" : "This field is required."
        if ('Category' in fieldValues)
            temp.Category = fieldValues.Category ? "" : "This field is required."
        if ('ProductName' in fieldValues)
            temp.ProductName = fieldValues.ProductName ? "" : "This field is required."
        if ('Weight' in fieldValues)
            temp.Weight = fieldValues.Weight ? "" : "This field is required."
        if ('MRP' in fieldValues)
            temp.MRP = fieldValues.MRP ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const onProductSave = (event) => {
        event.preventDefault()
        if (validate()) {
            console.log(values);

            const msg = isEdit ? 'product Update Successfully' : 'productAdded successfully'
            const url = isEdit ? prodctUrl.SaveEditProduct : prodctUrl.AddProductUrl
            addNewData(url, values, msg)
                .then(data => {
                    if (!isEdit)
                        resetForm()
                    else
                        setValues(data.data)
                });
        }
    }


    const fillUpProductDetails = (userId) => {
        get(prodctUrl.GetProductById + userId).then(data => {
            if (data && data.success) {
                console.log(data.data);
                setValues(data.data);
            }
        });
        setIsEdit(true);
        setAddEditButtontext('Update');
    }

    useEffect(() => {
        if (id != undefined || id != null) {
            fillUpProductDetails(id);
        }
    }, [])



    return (
        <div>
            <div className={`outer-div ${classes.root}`}>
                <div className="product-header">
                    <div className="title-container-rhs">
                        <Link href="/Product" color="secondary"> Back</Link>
                    </div>
                </div>
                <div className='productdata-outer-div'>
                    <Form >

                        <TextField required id="txtBarcode" label="Barcode" name='Barcode'
                            value={values.Barcode} onChange={handleInputChange}
                            error={!!errors.Barcode} helperText={errors.Barcode} />
                        <TextField required id="txtBrand" label="Brand" name='Brand'
                            error={!!errors.Brand}
                            helperText={errors.Brand}
                            value={values.Brand} onChange={handleInputChange} />
                        <TextField required id="txtCategory" label="Category" name='Category'
                            error={!!errors.Category} value={values.Category}
                            helperText={errors.Category} onChange={handleInputChange} />
                        <TextField required id="txtProductName" label="Product Name" name='ProductName'
                            error={!!errors.ProductName} value={values.ProductName}
                            helperText={errors.ProductName} onChange={handleInputChange} />
                        <TextField id="txtWeight" required label="Weight" type="number" name='Weight'
                            error={!!errors.Weight} value={values.Weight}
                            helperText={errors.Weight} onChange={handleInputChange} />
                        <TextField id="txtMrp" label="MRP" type="number" name='MRP'
                            error={!!errors.MRP} value={values.MRP}
                            helperText={errors.MRP} required onChange={handleInputChange} />
                        <TextField id="txtDiscount" label="Discount(%)" type="number" name='Discount'
                            onChange={handleInputChange} value={values.Discount} />
                        <TextField id="txtCGST" label="CGST(%)" type="number" name='CGST'
                            onChange={handleInputChange} value={values.CGST} />
                        <TextField id="txtSGST" label="SGST(%)" type="number" name='SGST'
                            onChange={handleInputChange} value={values.SGST} />
                    </Form>
                </div>
                <div className={`productAdd-buttons ${classes.root}`}>
                    <Button variant="contained" color='secondary' onClick={onProductSave} >{addEditButtontext}</Button>
                    {!isEdit ? <Button variant="contained" color='primary'> Reset</Button> : ''}
                    <Button variant="contained" color='default' onClick={() => window.location.href = '/Product'}> Cancle</Button>
                </div>
            </div>
        </div >
    )
}

export default ProductAdd


