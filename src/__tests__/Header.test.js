import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Components/Header';

afterEach(()=>{
    cleanup();
})

test("checkHeaderRender1", ()=>{
    const cat = "Titles";
    const { getByTitle} = render(<Header category = {cat} />);
    getByTitle("header1Container");
    getByTitle("fixedContainer1");
    getByTitle("header1Content");
    const para = getByTitle("header1ContentPart1");
    expect(para).toHaveTextContent("DEMO Streaming")
    getByTitle("header1ContentPart");
    const loginLink = getByTitle("loginLink");
    expect(loginLink).toHaveTextContent("Log in");
    const btn  = getByTitle("btn");
    expect(btn).toHaveTextContent("Start your free trail");
    getByTitle("header2Container");
    getByTitle("fixedContainer2");
    getByTitle("header2Content");
    const para2 = getByTitle("header2ContentPart");
    expect(para2).toHaveTextContent("Popular Titles");
})

test("checkHeaderRender2", ()=>{
    const cat = "Movies";
    const { getByTitle} = render(<Header category = {cat} />);
    getByTitle("header1Container");
    getByTitle("fixedContainer1");
    getByTitle("header1Content");
    const para = getByTitle("header1ContentPart1");
    expect(para).toHaveTextContent("DEMO Streaming");
    getByTitle("header1ContentPart");
    const loginLink = getByTitle("loginLink");
    expect(loginLink).toHaveTextContent("Log in");
    const btn  = getByTitle("btn");
    expect(btn).toHaveTextContent("Start your free trail");
    getByTitle("header2Container");
    getByTitle("fixedContainer2");
    getByTitle("header2Content");
    const para2 = getByTitle("header2ContentPart");
    expect(para2).toHaveTextContent("Popular Movies");
})

test("checkHeaderRender3", ()=>{
    const cat = "Series";
    const { getByTitle} = render(<Header category = {cat} />);
    getByTitle("header1Container");
    getByTitle("fixedContainer1");
    getByTitle("header1Content");
    const para = getByTitle("header1ContentPart1");
    expect(para).toHaveTextContent("DEMO Streaming");
    getByTitle("header1ContentPart");
    const loginLink = getByTitle("loginLink");
    expect(loginLink).toHaveTextContent("Log in");
    const btn  = getByTitle("btn");
    expect(btn).toHaveTextContent("Start your free trail");
    getByTitle("header2Container");
    getByTitle("fixedContainer2");
    getByTitle("header2Content");
    const para2 = getByTitle("header2ContentPart");
    expect(para2).toHaveTextContent("Popular Series");
})

test('match snapshot #1', ()=>{
    const cat = "Titles";
    const tree = renderer.create(<Header category = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('match snapshot #2', ()=>{
    const cat = "Series";
    const tree = renderer.create(<Header category = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('match snapshot #3', ()=>{
    const cat = "Movies";
    const tree = renderer.create(<Header category = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})