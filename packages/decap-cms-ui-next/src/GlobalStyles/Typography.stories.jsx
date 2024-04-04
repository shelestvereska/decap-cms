import React from 'react';

export default {
  title: 'Foundations/Typography',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export function _Typography() {
  return (
    <div style={{ padding: '4rem' }}>
      <h1>Typography</h1>
      <h2>Headings</h2>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <h2>Paragraphs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nunc sit amet neque
        ultrices tincidunt. Nulla facilisi. Nullam auctor, nunc in tincidunt ultricies, turpis nunc
        ultricies justo, et lacinia nisl ex nec nunc. Nullam nec metus et enim tincidunt
        condimentum. Nulla facilisi. Sed in nunc et quam ultricies tincidunt. Nullam auctor, nunc in
        tincidunt ultricies, turpis nunc ultricies justo, et lacinia nisl ex nec nunc. Nullam nec
        metus et enim tincidunt condimentum. Nulla facilisi. Sed in nunc et quam ultricies
        tincidunt.
      </p>
      <h2>Links</h2>
      <p>
        <a href="https://www.google.com">This is a link</a>
      </p>
      <h2>Lists</h2>
      <h3>Unordered List</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <h3>Ordered List</h3>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <h3>Definition List</h3>
      <dl>
        <dt>Term 1</dt>
        <dd>Definition 1</dd>
        <dt>Term 2</dt>
        <dd>Definition 2</dd>
        <dt>Term 3</dt>
        <dd>Definition 3</dd>
      </dl>
    </div>
  );
}
