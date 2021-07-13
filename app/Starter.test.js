import React from 'react';
import * as v from 'react-test-renderer';
import AppText from './components/AppText';

test("AppText contains text", () => {
    const json = v.TestRenderer.create(<AppText>Haiya</AppText>).toJSON();
    expect(json.props.style[0].fontSize).toBe(20);
    expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
    expect(json.children.includes("Haiya"));
})