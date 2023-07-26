import React from 'react';
import { Form } from 'react-bootstrap';

const FilterWidget = ({ filters, handleFilterChange, resetFilters }) => {
  return (
    <Form>
      {/* Company filter */}
      <Form.Group controlId="companyFilter">
        <Form.Label>Company</Form.Label>
        <Form.Control
        as='select'
          type="text"
          placeholder="Filter by company"
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
        >
          <option value="">All</option>
          <option value="ikea">Ikea</option>
          <option value="liddy">Liddy</option>
          <option value="caressa">Caressa</option>
          <option value="marcos">Marcos</option>
        </Form.Control>
      </Form.Group>

      {/* Color filter */}
      <Form.Group controlId="colorFilter">
            <Form.Label>Color</Form.Label>
            <Form.Control
              as="select"
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
            >
              <option value="">All Colors</option>
              <option value="#ffb900">Yellow</option>
              <option value="#ff0000">Red</option>
              {/* Add more color options here */}
            </Form.Control>
          </Form.Group>

      {/* Price filter */}
      <Form.Group controlId="priceFilter">
        <Form.Label>Price Range</Form.Label>
        <div className="d-flex align-items-center">
          <span>$0</span>
          <Form.Range
            min="0"
            max="3099"
            step="1"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
          />
          <span>$3099</span>
        </div>
      </Form.Group>

      {/* Shipping filter */}
      <Form.Group controlId="shippingFilter">
        <Form.Check
          type="checkbox"
          label="Free Shipping"
          name="shipping"
          checked={filters.shipping}
          onChange={handleFilterChange}
        />
      </Form.Group>

      {/* Category filter */}
      <Form.Group controlId="categoryFilter">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Filter by category"
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        />
      </Form.Group>

      <button type="button" className="btn btn-primary mr-2" onClick={resetFilters}>
        Reset Filters
      </button>
    </Form>
  );
};

export default FilterWidget;
