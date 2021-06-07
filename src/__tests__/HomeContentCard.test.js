import {render, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomeContentCard from '../Components/HomeContentCard';

afterEach(()=>{
    cleanup();
})

test("checkHeaderRender1", ()=>{
    const cat = "Movies";
    const { getByTitle} = render(<HomeContentCard type = {cat} />);
    getByTitle("main");
    getByTitle("card");
    getByTitle("media");
    const type = getByTitle("type");
    expect(type).toHaveTextContent("Movies")
    const typeName = getByTitle("typeName");
    expect(typeName).toHaveTextContent("Popular Movies")
})

test("checkHeaderRender2", ()=>{
    const cat = "Series";
    const { getByTitle} = render(<HomeContentCard type = {cat} />);
    getByTitle("main");
    getByTitle("card");
    getByTitle("media");
    const type = getByTitle("type");
    expect(type).toHaveTextContent("Series")
    const typeName = getByTitle("typeName");
    expect(typeName).toHaveTextContent("Popular Series")
})

test('match snapshot #1', ()=>{
    const cat = "Movies";
    const tree = renderer.create(<HomeContentCard type = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('match snapshot #2', ()=>{
    const cat = "Series";
    const tree = renderer.create(<HomeContentCard type = {cat} />).toJSON();
    expect(tree).toMatchSnapshot();
})