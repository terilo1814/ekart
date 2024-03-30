import React, { useState } from 'react'
import './Products.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { List } from '../../List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


export const Products = () => {

  const catId = parseInt(useParams().id)
  const [sort, setSort] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedPrice, setSelectedPrice] = useState([])

  const [toggle, setToggle] = useState({
    category: false,
    price: false,
  })

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const categoryHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategory(
      isChecked ? [...selectedCategory, value] : selectedCategory.filter((item) => item !== value)
    );
  };

  const priceHandler = (e) => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedPrice(
      isChecked ? [...selectedPrice, value] : selectedPrice.filter((item) => item !== value)
    )
  }



  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h3 onClick={() => setToggle({ ...toggle, category: !toggle.category })}>Category <KeyboardArrowDownIcon className='icon' /></h3>
          {toggle.category && (
            <div className='dropDownContent'>
              {data.map((item) => (
                <div className='inputItem' key={item.id}>
                  <input type='checkbox'
                    id={item.id}
                    value={item.id}
                    onChange={categoryHandler} />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className='filterItem'>
          <h3 onClick={() => setToggle({ ...toggle, price: !toggle.price })}>Price <KeyboardArrowDownIcon className='icon' /></h3>
          {toggle.price && (
            <div className='dropDownContent'>
              <div className='inputItem'>
                <input type='checkbox' id='1' value={1} onChange={priceHandler} />
                <label htmlFor='1'>Under Rs 999</label>
              </div>
              <div className='inputItem'>
                <input type='checkbox' id='2' value={2} onChange={priceHandler} />
                <label htmlFor='2'>Rs 1000 - Rs 4999</label>
              </div>
              <div className='inputItem'>
                <input type='checkbox' id='3' value={3} onChange={priceHandler} />
                <label htmlFor='3'>Rs 5000 - Rs 9999</label>
              </div>
              <div className='inputItem'>
                <input type='checkbox' id='4' value={4} onChange={priceHandler} />
                <label htmlFor='4'>Over 10000</label>
              </div>
            </div>)}
        </div>

        <div className='filterItem'>
          <h3>Sort by</h3>
          <div className='inputItem'>
            <input type='radio' id='asc' value='asc' name='price' onChange={() => setSort('asc')} />
            <label htmlFor='asc'>Price low to high</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='desc' value='desc' name='price' onChange={() => setSort('desc')} />
            <label htmlFor='desc'>Price high to low</label>
          </div>
          <div className='inputItem'>
            <input type='radio' id='trend' value='trend' name='price' onChange={() => setSort('trend')} />
            <label htmlFor='trend'>Trending</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img className='catImg' src='https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        <List catId={catId} sort={sort} selectedCategory={selectedCategory} selectedPrice={selectedPrice} />
      </div>

    </div>
  )
}
