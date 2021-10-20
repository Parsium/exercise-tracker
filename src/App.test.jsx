import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

const test_data = [
    {"name": "Barbell Press", "rep_type": "weight"},
    {"name": "Crunch", "rep_type": "time"}
];

describe("App", () => {
    const wrapper = render(<App />)
});