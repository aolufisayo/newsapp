import React from 'react';
import renderer from 'react-test-renderer';
import NewsList from '../../src/components/NewsList';
import Article from '../../src/components/Article';




describe("Render NewsList", () => {
  it('renders the newslist component', () => {
    const wrapper = renderer.create(<NewsList />).toJSON()
    //expect(wrapper.findAll(<Article />)).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})