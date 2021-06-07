import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import MainContentCard from '../Components/MainContentCard';

afterEach(()=>{
    cleanup();
})

test("checkHeaderRender1", ()=>{
    const cat = "Ages of Love";
    const { getByTitle} = render(<MainContentCard title = {cat} />);
    getByTitle("main");
    getByTitle("card");
    getByTitle("cardImg")
    const title = getByTitle("title");
    expect(title).toHaveTextContent("Ages of Love")
})

test("checkHeaderRender2", ()=>{
    const cat = "Danny Collins";
    const { getByTitle} = render(<MainContentCard title = {cat} />);
    getByTitle("main");
    getByTitle("card");
    getByTitle("cardImg")
    const title = getByTitle("title");
    expect(title).toHaveTextContent("Danny Collins")
})

test('match snapshot #1', ()=>{
    const cat = "Ages of Love";
    const tree = renderer.create(<MainContentCard type = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('match snapshot #2', ()=>{
    const cat = "Danny Collins";
    const tree = renderer.create(<MainContentCard type = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})