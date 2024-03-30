import React, { useState } from 'react';
import './Product.scss';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartReducer';

export const Product = () => {
  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('XS');
  const [showDetails, setShowDetails] = useState({
    pDetails: false,
    pCode: false,
    pShipping: false,
  });


  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);


  const selectedSize = (size) => {
    setSize(size);
  };

  


  return (
    <div className='product'>
      {loading ? (
        'Loading................'
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=''
                onClick={(e) => setSelectedImg('img')}
              />
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=''
                onClick={(e) => setSelectedImg('img2')}
              />
            </div>
            <div className='mainImg'>
              <img
                src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data?.attributes?.url}
                alt=''
              />
            </div>
          </div>

          <div className='right'>
            <h2 className='title'>{data?.attributes?.title}</h2>
            <span className='price'>₹ {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc} </p>

            <div className='quantity'>
              <RemoveIcon onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} />
              <span className='count'>{quantity}</span>
              <AddIcon onClick={() => setQuantity((prev) => prev + 1)} />
            </div>

            <h2 className='size'>Size</h2>
            <div className='labels'>
              <div className={`label ${size === 'XS' ? 'selected' : ''}`} onClick={(e) => selectedSize('XS')}>
                XS
              </div>
              <div className={`label ${size === 'S' ? 'selected' : ''}`} onClick={() => selectedSize('S')}>
                S
              </div>
              <div className={`label ${size === 'M' ? 'selected' : ''}`} onClick={() => selectedSize('M')}>
                M
              </div>
              <div className={`label ${size === 'L' ? 'selected' : ''}`} onClick={() => selectedSize('L')}>
                L
              </div>
              <div className={`label ${size === 'XL' ? 'selected' : ''}`} onClick={() => selectedSize('XL')}>
                XL
              </div>
              <div className={`label ${size === 'XXL' ? 'selected' : ''}`} onClick={() => selectedSize('XXL')}>
                XXL
              </div>
            </div>

            <div className='links'>
              <button className='add' onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }>
                <ShoppingBagOutlinedIcon />Add to Bag
              </button>
              <div className='item'>
                <FavoriteBorderIcon />ADD TO WISHLIST
              </div>
            </div>

            <div className='info'>
              <h4 className='icons' onClick={() => setShowDetails({ ...showDetails, pDetails: !showDetails.pDetails })}>
                Product Details<ArrowDropDownTwoToneIcon />
              </h4>
              {showDetails.pDetails && (
                <>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>consectetur adipiscing elit</li>
                    <li>Quis ipsum suspendisse ultrices gravida</li>
                  </ul>
                </>
              )}

              <h4 className='icons' onClick={() => setShowDetails({ ...showDetails, pCode: !showDetails.pCode })}>
                Product Code <ArrowDropDownTwoToneIcon />
              </h4>
              {showDetails.pCode && (
                <ul>
                  <li>XXXXX</li>
                </ul>
              )}

              <h4 className='icons' onClick={() => setShowDetails({ ...showDetails, pShipping: !showDetails.pShipping })}>
                Shipping and Returns <ArrowDropDownTwoToneIcon />
              </h4>
              {showDetails.pShipping && (
                <ul>
                  <li>Returns accepted by mail and in store within 30 days of the shipment date. Items must be unworn and tags must be attached.</li>
                  <li>Once a return is received, please allow 7-14 business days to process and 3-5 business days for the refund to be credited to the payment method used at the time of purchase.</li>
                </ul>
              )}
            </div>

          </div>
        </>
      )}
    </div>
  );
};
