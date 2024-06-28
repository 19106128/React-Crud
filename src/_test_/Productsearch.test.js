import { render,screen } from "@testing-library/react"
import ProductForm from "../ProductForm";
import ProductSearch from "../ProductSearch";


test('Checking component loaded',()=>{
    //steps for h1 element
    render(<ProductSearch/>);
    expect(screen.queryByText(/Search product/)).toBeInTheDocument
})

test('Checking component loaded',()=>{
    //steps for h1 element
    render(<ProductForm/>);
    expect(screen.queryByText(/Add product/)).toBeInTheDocument
})

test('checking input',()=>{
    render(<ProductSearch/>);
    expect(screen.queryByPlaceholderText('Enter product name')).toHaveValue("");
})

test('checking input',()=>{
    render(<ProductForm/>);
    expect(screen.queryByPlaceholderText('Enter product')).toHaveValue("");
})