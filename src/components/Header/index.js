/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles.scss';
import { BASE_URL, POSTMAN_URL } from './../../utils/constants';

export const Header = () => {
  return (
        <h1 className='page-title'>ABC College of engineering
            <a className="float-right btn btn-primary btn-lg"
                href={BASE_URL + POSTMAN_URL}
                target="_blank"
                download="">
                    Download Postman Collection
            </a>
        </h1>
  );
}
