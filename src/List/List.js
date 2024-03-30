import React from 'react'
import './List.scss'
import { Card } from '../components/Card/Card'
import useFetch from '../hooks/useFetch'


export const List = ({ catId, sort, selectedCategory, selectedPrice }) => {


    const priceFilters = selectedPrice.map((price) => {
        switch (price) {
            case '1':
                return '&[filters][price][$gte]=0&[filters][price][$lte]=999';
            case '2':
                return '&[filters][price][$gte]=1000&[filters][price][$lte]=4999';
            case '3':
                return '&[filters][price][$gte]=5000&[filters][price][$lte]=9999';
            case '4':
                return '&[filters][price][$gte]=10000';
            default:
                return '';
        }
    }).join('');

    const sortParam = sort ? `&sort=price:${sort}` : '';

    const url = `/products?populate=*&[filters][categories][id]=${catId}
        ${selectedCategory.map((item) => `&[filters][sub_categories][id][$eq]=${item}`)}
        ${priceFilters}
        ${sortParam}`;

    const { data, loading, error } = useFetch(url);


    return (
        <div className="list">
            {loading ? 'Loading................'
                : data?.map((item) =>
                    <Card item={item} key={item.id} />)}
        </div>
    );
}
