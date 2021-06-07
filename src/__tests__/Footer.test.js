import {render, cleanup, getAllByTitle} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Components/Footer';

afterEach(()=>{
    cleanup();
})

test("checkHeaderRender1", ()=>{
    const cat = "Titles";
    const { getByTitle, getAllByTitle} = render(<Footer />);
    getByTitle("footerContainer");
    getByTitle("fixedContainer");
    getByTitle("footerContent1");
    getByTitle("footerContent11");
    const home = getByTitle("home");
    expect(home).toHaveTextContent("Home");

    const terms = getByTitle("terms");
    expect(terms).toHaveTextContent("Terms and Conditions");

    const privacy = getByTitle("privacy");
    expect(privacy).toHaveTextContent("Privacy Policy");

    const collection = getByTitle("collection");
    expect(collection).toHaveTextContent("Collection Statement");

    const help = getByTitle("help");
    expect(help).toHaveTextContent("Help");

    const manage = getByTitle("manage");
    expect(manage).toHaveTextContent("Manage Account");

    const footerContent2 = getByTitle("footerContent2");
    expect(footerContent2).toHaveTextContent("Copyright © 2016 Demo Streaming. All Rights Reserved.");
    getByTitle("footerContent3");
    getByTitle("footerContent31");
    getByTitle("fb");
    getByTitle("twitter");
    getByTitle("insta");
    getByTitle("footerContent32");
    getByTitle("apple");
    getByTitle("appleImg");
    getByTitle("appleContent");
    const appleContent1 = getByTitle("appleContent1");
    expect(appleContent1).toHaveTextContent("Download on the");

    const appleContent2 = getByTitle("appleContent2");
    expect(appleContent2).toHaveTextContent("App Store");

    getByTitle("playstore");
    getByTitle("playstoreImg");
    getByTitle("playstoreContent");
    const playstoreContent1 = getByTitle("playstoreContent1");
    expect(playstoreContent1).toHaveTextContent("GET IT ON");

    const playstoreContent2 = getByTitle("playstoreContent2");
    expect(playstoreContent2).toHaveTextContent("Google Play");
    
    getByTitle("microsoft");
    getByTitle("microsoftImg");
    getByTitle("microsoftContent");
    const microsoftContent1 = getByTitle("microsoftContent1");
    expect(microsoftContent1).toHaveTextContent("Get it from");

    const microsoftContent2 = getByTitle("microsoftContent2");
    expect(microsoftContent2).toHaveTextContent("Microsoft");
})


test('match snapshot #1', ()=>{
    const cat = "Titles";
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
})