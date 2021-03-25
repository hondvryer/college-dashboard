import React from 'react';
import './styles.scss';

export const Header = () => {
  return (
        <h1 className='page-title'>ABC College of engineering
            <a className="float-right btn btn-primary btn-lg"
                href="/postman/assignment.postman_collection.json"
                download="">
                    Download Postman Collection
            </a>
        </h1>
  );
}
